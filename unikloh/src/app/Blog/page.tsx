import React from 'react'

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
    <article>
        {post.map((item:any)=>{
            return (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                    <p>{item.author}</p>
                </div>
            )
        })}

    </article>
  );
}
