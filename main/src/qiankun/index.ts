import { registerMicroApps, start } from 'qiankun'
import { appList } from './config'

// 微应用注册
export const registerApps = () => {
  registerMicroApps(appList)
  start({
    prefetch: false // 取消预加载
  })
}
