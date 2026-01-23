import BannerBlog from '../component/banner/BannerBlog'
import BlogPostClient from './BlogPostClient'
import { blogPosts } from './data/data'

export default async function BlogPost() {
  // Server-only logic stays here
  const post = blogPosts

  return (
    <>
      <BannerBlog />
      <BlogPostClient posts={post} />
    </>
  )
}