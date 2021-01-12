import { Action } from 'redux'

export enum QueryCursorActionTypes {
  INCRENENT_OFFSET_FACTOR = 'INCRENENT_OFFSET_FACTOR',
  SET_LIMIT = 'SET_LIMIT',
}

export interface QueryCursorOffsetFactorAction extends Action<QueryCursorActionTypes> {
  type: QueryCursorActionTypes.INCRENENT_OFFSET_FACTOR
}

export interface QueryCursorLimitAction extends Action<QueryCursorActionTypes> {
  type: QueryCursorActionTypes.SET_LIMIT
  payload: {
    limit: number
  }
}

export type QueryCursorAction = QueryCursorOffsetFactorAction | QueryCursorLimitAction
