import { action } from 'typesafe-actions'
import { QueryCursorActionTypes } from './types'

export const incrementOffset = () => action(QueryCursorActionTypes.INCRENENT_OFFSET_FACTOR)

export const setLimit = (limit: number) => action(QueryCursorActionTypes.SET_LIMIT, { limit })
