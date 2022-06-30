import { initGlobalState, type MicroAppStateActions } from 'qiankun'

const initialState = {}
const actions: MicroAppStateActions = initGlobalState(initialState)

export default actions
