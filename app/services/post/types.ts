import { Currency, EditorialMode } from '@common/enum'
import { User } from '@services/account/types'
import { PayloadData } from '@services/types'

export interface Post extends PayloadData {
  tags: string[]
  cover_image: string | null
  date_created: string
  last_modified: string
  images: string[]
  archived: boolean
  blocked: boolean
  author: Omit<User, 'email'>
  post_id: string
  excerpt: string
  title: string
  description: string
  votes: number
  slug: string
  editorial: {
    unpublish: boolean
    mode: EditorialMode
  }
  paywall: {
    active: boolean
    currency: Currency
    cost: number
  }
  vote: {
    up: number
    down: number
  }
}

export interface TrendingPosts {
  post: Post[]
}

export interface AllPosts {
  post: {
    [P in 'basic' | 'premium' | 'subscribing' | 'recent' | 'trending']?: Post[]
  }
}
