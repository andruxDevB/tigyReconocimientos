import {
  TOGGLE_SIDEBAR,
  HIDE_SIDEBAR,
  SET_USER_COUNT,
  SET_USER_ALERTS,
  SET_EVENTS,
} from './types'

export default {
  [TOGGLE_SIDEBAR](state) {
    state.sidebar = !state.sidebar
  },
  [HIDE_SIDEBAR](state) {
    state.sidebar = false
  },
  [SET_USER_COUNT](state, payload) {
    state.count = payload
  },
  [SET_USER_ALERTS](state, payload) {
    state.alerts = payload
  },
  [SET_EVENTS](state, payload) {
    state.events = payload
  },
}
