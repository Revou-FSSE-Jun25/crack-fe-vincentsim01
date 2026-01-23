
import BlogPostClient from '../app/Blog/BlogPostClient';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { blogPosts } from '../app/Blog/data/data';
import BlogPost from '../app/Blog/page';
// import PostsPage from '@/pages/posts'


describe('BlogPostClient', () => {
  it('renders blog posts', async () => {
    render(<BlogPostClient posts={blogPosts} />);
    const blogHeading = await screen.findByText('OUR BLOG');
    expect(blogHeading).toBeInTheDocument();
  });
});

const mockPosts = [
  {
    id: 1,
    image: '/test.jpg',
    title: 'Mock Title',
    content: 'Mock Content',
    author: 'Mock Author',
  },
]

describe('BlogPostClient', () => {
  it('renders blog posts correctly', () => {
    render(<BlogPostClient posts={mockPosts} />)

    expect(
      screen.getByText('OUR BLOG')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Mock Title')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Mock Content')
    ).toBeInTheDocument()

    expect(
      screen.getByText('By Mock Author')
    ).toBeInTheDocument()
  })
})


// jest.mock('@/lib/getPosts', () => ({
//   getPosts: jest.fn(),
// }))
