import { Dispatch } from 'redux'
import { action } from 'typesafe-actions'
import { PostActionType, FetchAllPostAction, SetPostFetching } from './types'
import { getAllPosts } from '@services/post'

export function fetchAllPostRequest() {
  return async function fetchAllPost(dispatch: Dispatch<FetchAllPostAction | SetPostFetching>) {
    dispatch(action(PostActionType.SET_POST_FETCHING, true))
    const {
      data: { data: post },
    } = await getAllPosts()
    dispatch(action(PostActionType.FETCH_ALL_POST, post))
  }
}
