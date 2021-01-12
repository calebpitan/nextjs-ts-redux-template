import { createStore, applyMiddleware, AnyAction } from 'redux'
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper'
import { useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

export type RootState = ReturnType<typeof rootReducer>

const composeMiddleware = (...middlewares: any[]) => {
  const { composeWithDevTools } = require('redux-devtools-extension')
  if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = composeWithDevTools({ trace: true })
    return composeEnhancers(applyMiddleware(...middlewares))
  }
  return applyMiddleware(...middlewares)
}

const makeStore: MakeStore<RootState, AnyAction> = (_ctx: Context) => {
  const store = createStore(rootReducer, composeMiddleware(thunk))
  return store
}

export function useSelectorProxy<S extends RootState[keyof RootState]>(
  selector: (state: RootState) => S,
  equalityFN?: (left: S, right: S) => boolean
): S {
  return useSelector<RootState, S>(selector, equalityFN)
}

export const wrapper = createWrapper(makeStore)
