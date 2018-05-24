import {set} from './utils/localstorage'
import consume from './utils/api'

export function getAllPosts () {
  return consume('get', '/api/v1/home/')
    .then(res => {
      return res.body
    })
}
