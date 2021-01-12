import southwall from '@api/axios'
import { AllPosts } from './types'
import { Payload } from '../types'

export async function getAllPosts() {
  const res = await southwall.get<Payload<AllPosts>>('/post')
  return res
}
