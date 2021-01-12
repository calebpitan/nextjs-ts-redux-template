import { Reducer } from 'redux'
import { QueryCursorAction, QueryCursorActionTypes } from './types'
const initial = {
  offset: 0,
  limit: 20,
}

const cursorReducer: Reducer<typeof initial, QueryCursorAction> = (state = initial, action) => {
  switch (action.type) {
    case QueryCursorActionTypes.INCRENENT_OFFSET_FACTOR: {
      return {
        ...state,
        offset: state.offset + 1,
      }
    }

    case QueryCursorActionTypes.SET_LIMIT: {
      return {
        ...state,
        limit: action.payload.limit,
      }
    }

    default:
      return state
  }
}

export default cursorReducer
