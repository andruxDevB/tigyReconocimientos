import {
  TOGGLE_SIDEBAR,
  SET_FRIENDS_RECOGMENT,
  NULL_FRIENDS_RECOGMENT,
} from './types'

export default {
  [TOGGLE_SIDEBAR](state) {
    state.sidebar = !state.sidebar
  },
  [SET_FRIENDS_RECOGMENT](state, payload) {
    state.friendsForRecogniment = payload
  },
  [NULL_FRIENDS_RECOGMENT](state) {
    state.friendsForRecogniment.length = 0
  },
}
