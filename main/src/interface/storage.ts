export interface storageData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  time: number
  expire: number
}

export interface storageConfig {
  type: string
  prefix: string
  expire: number
  isEncrypt: boolean
}
