import { PayloadData } from '@services/types'

export interface User extends PayloadData {
  date_created: string
  avatar: string | null
  blocked: boolean
  social_links: {
    website: string
    twitter: string
    linkedin: string
  }
  takes_subscription: boolean
  username: string
  account_id: string
  email: string
  firstname: string
  lastname: string
}
