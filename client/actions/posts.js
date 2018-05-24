import {
  getAllPosts
} from '../apiClient'

import {errorHandle} from './errorHandle'

export const ALL_POSTS = 'ALL_POSTS'

export function handleAllPosts () {
  return dispatch => {
    return getAllPosts()
      .then(Posts => {
        dispatch(allPosts(Posts))
      })
      .catch(err => {
        dispatch(errorHandle(err.message))
        return Promise.reject(err.message)
      })
  }
}

export function allPosts (posts) {
  return {
    type: ALL_POSTS,
    posts
  }
}
