import { Reducer } from 'redux'
import { AllPosts } from '@services/post/types'
import { fetchAllReducerFn, fetchByCategoryReducerFn } from './reducer'
import { PostActionType, FetchPostAction } from './types'
import { State } from '../types'

const initial: State<AllPosts['post']> = {
  data: null,
  fetching: false,
}

const postReducer: Reducer<typeof initial, FetchPostAction> = (state = initial, action) => {
  switch (action.type) {
    case PostActionType.FETCH_ALL_POST: {
      return fetchAllReducerFn(state, action.payload)
    }

    case PostActionType.FETCH_BASIC_POST:
    case PostActionType.FETCH_PREMIUM_POST:
    case PostActionType.FETCH_RECENT_POST:
    case PostActionType.FETCH_SUBSCRIBING_POST:
    case PostActionType.FETCH_TRENDING_POST: {
      const [category] = Object.keys(action.payload) as Array<keyof AllPosts['post']>
      return fetchByCategoryReducerFn(state, action.payload, category)
    }

    case PostActionType.SET_POST_FETCHING: {
      return {
        ...state,
        fetching: action.payload,
      }
    }

    default:
      return state
  }
}

export type PostState = typeof initial

export default postReducer
