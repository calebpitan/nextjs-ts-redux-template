import { Action } from 'redux'
import { AllPosts } from '@services/post/types'

export enum PostActionType {
  FETCH_ALL_POST = 'FETCH_ALL_POST',
  FETCH_TRENDING_POST = 'FETCH_TRENDING_POST',
  FETCH_RECENT_POST = 'FETCH_RECENT_POST',
  FETCH_PREMIUM_POST = 'FETCH_PREMIUM_POST',
  FETCH_BASIC_POST = 'FETCH_BASIC_POST',
  FETCH_SUBSCRIBING_POST = 'FETCH_SUBSCRIBING_POST',
  SET_POST_FETCHING = 'SET_POST_FETCHING',
}

export interface FetchAllPostAction extends Action<PostActionType> {
  type: PostActionType.FETCH_ALL_POST
  payload: Pick<AllPosts, 'post'>
}

export interface FetchBasicPostAction extends Action<PostActionType> {
  type: PostActionType.FETCH_BASIC_POST
  payload: Pick<AllPosts['post'], 'basic'>
}

export interface FetchPremiumPostAction extends Action<PostActionType> {
  type: PostActionType.FETCH_PREMIUM_POST
  payload: Pick<AllPosts['post'], 'premium'>
}

export interface FetchRecentPostAction extends Action<PostActionType> {
  type: PostActionType.FETCH_RECENT_POST
  payload: Pick<AllPosts['post'], 'recent'>
}

export interface FetchSubscribingPostAction extends Action<PostActionType> {
  type: PostActionType.FETCH_SUBSCRIBING_POST
  payload: Pick<AllPosts['post'], 'subscribing'>
}

export interface FetchTrendingPostAction extends Action<PostActionType> {
  type: PostActionType.FETCH_TRENDING_POST
  payload: Pick<AllPosts['post'], 'trending'>
}

export interface SetPostFetching extends Action<PostActionType> {
  type: PostActionType.SET_POST_FETCHING
  payload: boolean
}

export type FetchPostAction =
  | FetchAllPostAction
  | FetchBasicPostAction
  | FetchPremiumPostAction
  | FetchRecentPostAction
  | FetchSubscribingPostAction
  | FetchTrendingPostAction
  | SetPostFetching
