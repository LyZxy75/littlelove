import {GET_CITY} from './mutation-types'
import axios from '../http'

export default {
  // 把commit从store解构出来
  async getCity ({commit}) {
    let res = await axios.req("api/Showtime/HotCitiesByCinema.api")
    console.log(res)
    commit(GET_CITY, res)
  }
}