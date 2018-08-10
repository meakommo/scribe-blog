import {ALL_POSTS} from '../actions/posts'

const initialPosts = []

export default function (allPosts = initialPosts, action) {
  switch (action.type) {
    case ALL_POSTS:
      return action.allPosts

    default:
      return allPosts
  }
}
