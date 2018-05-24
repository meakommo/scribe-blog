import {ALL_POSTS} from '../actions/posts'

const initialallPosts = []

export default function (allPosts = initialallPosts, action) {
  switch (action.type) {
    case ALL_POSTS:
      return action.allPosts

    default:
      return allPosts
  }
}
