import { AllPosts } from '@services/post/types'
import { State } from '../types'

export function fetchAllReducerFn(
  state: State<AllPosts['post']>,
  payload: AllPosts
): State<AllPosts['post']> {
  const props = Object.keys(payload.post) as Array<keyof AllPosts['post']>
  const newState = props.reduce<typeof state>(
    (obj, key) => {
      obj.data[key] = payload.post[key].concat(state?.data?.[key]).filter(Boolean)
      return obj
    },
    { data: {}, fetching: false }
  )
  return newState
}

export function fetchByCategoryReducerFn<C extends keyof AllPosts['post']>(
  state: State<AllPosts['post']>,
  payload: Pick<AllPosts['post'], C>,
  category: C
) {
  const newState: typeof state = {
    data: {
      ...state.data,
      trending: payload[category].concat(state?.data?.trending).filter(Boolean),
    },
    fetching: false,
  }
  return newState
}
