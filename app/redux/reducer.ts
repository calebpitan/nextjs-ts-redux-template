import { combineReducers } from 'redux'
import postReducer from './post'
import cursorReducer from './cursor'

const rootReducer = combineReducers({
  post: postReducer,
  cursor: cursorReducer,
})

export default rootReducer
