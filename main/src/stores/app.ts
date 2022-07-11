import { defineStore } from 'pinia'
export const useAppStore = defineStore({
  id: 'app',
  state: () =>
    ({
      isRouterAlive: true
    } as { isRouterAlive: boolean })
})
