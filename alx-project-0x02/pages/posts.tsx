import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1>All Posts</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

// ✅ Implement getStaticProps for data fetching at build time
export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: PostProps[] = await response.json();

    return {
      props: { posts },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: { posts: [] }, // Return empty array if fetch fails
    };
  }
}
