import { meta as post1 } from '../posts/best-things-to-do-on-the-las-vegas-strip'
import { meta as post2 } from '../posts/las-vegas-strip-hotels-guide'
import { meta as post3 } from '../posts/free-things-to-do-on-the-strip'
import { meta as post4 } from '../posts/las-vegas-helicopter-tours'
import { meta as post5 } from '../posts/grand-canyon-tours-from-las-vegas'

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  image: string
  category: string
  ctaUrl?: string
  ctaText?: string
}

export const posts: PostMeta[] = [post1, post2, post3, post4, post5]
