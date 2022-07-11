import { defineStore } from 'pinia'
export const useAppStore = defineStore({
  id: 'app',
  state: () =>
    ({
      isRouterAlive: true,
      isLoading: false
    } as { isRouterAlive: boolean; isLoading: boolean })
})
