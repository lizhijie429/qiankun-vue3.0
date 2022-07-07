import CryptoJS from 'crypto-js'
import type { storageConfig, storageData } from '@/interface/storage'

const config: storageConfig = {
  type: 'sessionStorage', // 本地存储类型 sessionStorage
  prefix: 'SDF_0.0.1', // 名称前缀 建议：项目名 + 项目版本
  expire: 360, //过期时间 单位：秒
  // isEncrypt: import.meta.env.MODE === 'production' ? true : false // 默认加密 为了调试方便, 开发过程中可以不加密
  isEncrypt: false
}

/**
 * @description 获取storage类型
 * @returns storage
 */
function storageType(): Storage {
  return config.type === 'localStorage' ? localStorage : sessionStorage
}

/**
 * @description 加密方法
 * @param value{string} 需要加密的内容
 * @returns {string}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const encrypt = (value: any): string => {
  if (typeof value === 'object') {
    try {
      value = JSON.stringify(value)
    } catch (error) {
      console.log('encrypt error:', error)
    }
  }
  const encrypted = CryptoJS.AES.encrypt(value, import.meta.env.VITE_SECRET_KEY)
  return encrypted.toString()
}

/**
 * @description 解密方法
 * @param value
 * @returns {string}
 */
const decrypt = (value: string): string => {
  const ciphertext = CryptoJS.AES.decrypt(
    value,
    import.meta.env.VITE_SECRET_KEY
  )
  return ciphertext.toString(CryptoJS.enc.Utf8)
}

// 名称前自动添加前缀
function autoAddPrefix(key: string): string {
  const prefix = config.prefix ? config.prefix + '_' : ''
  return prefix + key
}

// 移除已添加的前缀
function autoRemovePrefix(key: string) {
  const len = config.prefix ? config.prefix.length + 1 : 0
  return key.substring(len)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setStorage = (key: string, value: any, expire?: number) => {
  if (value === '' || value === null || value === undefined) {
    value = null
  }
  expire = (expire ? expire : config.expire) * 1000
  if (!expire || isNaN(expire) || expire < 1) {
    throw new Error(`expire当前为${expire}，要求expire必须为大于１的整数`)
  }
  const data: storageData = {
    value: config.isEncrypt ? encrypt(value) : value, // 存储值
    time: Date.now(), //存值时间戳
    expire: expire // 过期时间
  }
  storageType().setItem(autoAddPrefix(key), JSON.stringify(data))
}

// 获取 getStorage
export const getStorage = (key: string) => {
  key = autoAddPrefix(key)
  if (
    !storageType().getItem(key) ||
    JSON.stringify(storageType().getItem(key)) === 'null'
  ) {
    return null
  }
  const _storageData: string | null = storageType().getItem(key)
  if (_storageData) {
    const storageData: storageData = JSON.parse(_storageData)

    // 对存储数据进行解密
    config.isEncrypt
      ? (storageData.value = decrypt(storageData.value))
      : JSON.parse(_storageData)

    // 过期删除
    if (
      storageData.expire &&
      config.expire * 1000 < Date.now() - storageData.time
    ) {
      removeStorage(key)
      return null
    } else {
      //  持续使用时会自动续期
      setStorage(autoRemovePrefix(key), storageData.value)
      return storageData.value
    }
  }
}

// 删除 removeStorage
export const removeStorage = (key: string) => {
  storageType().removeItem(autoAddPrefix(key))
}

// 清空 clearStorage
export const clearStorage = () => {
  storageType().clear()
}
