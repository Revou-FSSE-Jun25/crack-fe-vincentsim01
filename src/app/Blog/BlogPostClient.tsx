'use client'

type BlogPost = {
  id: number
  image: string
  title: string
  content: string
  author: string
}

export default function BlogPostClient({
  posts,
}: {
  posts: BlogPost[]
}) {
  return (
    <article className="mt-6 mb-6 p-5">
      <h1 className="m-5 mx-auto text-4xl font-bold text-center">
        OUR BLOG
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {posts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-4">{item.content}</p>
            <p className="text-sm text-gray-400">
              By {item.author}
            </p>
          </div>
        ))}
      </div>
    </article>
  )
}