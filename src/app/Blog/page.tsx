import React from 'react';
import BannerBlog from '../component/banner/BannerBlog';

export default async function BlogPost({ params }: any) {
  const post = await fetch(
    `https://shrimo.com/fake-api/blog`,
    { 
        method: 'GET',
        next: { revalidate: 86400 } }
  )
  .then(r => r.json())
  .then(data => data.blogs)
  ;



//   console.log(post);

  return (
    <>
    <BannerBlog></BannerBlog>
    <article className='mt-6 mb-6 p-5 '>
      <h1 className='m-5 mx-auto text-4xl font-bold text-center '>OUR BLOG</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {post.map((item: any) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h1 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h1>
            <p className="text-gray-600 mb-4">{item.content}</p>
            <p className="text-sm text-gray-400">By {item.author}</p>
          </div>
        ))}
      </div>
    </article>
  </>
  );
}
