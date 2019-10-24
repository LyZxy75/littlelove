import {ADD_NUM, DEL_NUM, SET_NUM, GET_CITY} from './mutation-types'

export default {
  [SET_NUM] (state, data) {
    state.num = data
  },
  [ADD_NUM] (state) {
    state.num += 1
  },
  [DEL_NUM] (state) {
    state.num -= 2
  },
  [GET_CITY] (state, data) {
    state.citys = data
  }
}