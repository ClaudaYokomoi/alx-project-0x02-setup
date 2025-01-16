// pages/posts.tsx
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard'; // Import PostCard
import { PostProps } from '../interfaces'; // Import PostProps

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  // Fetch posts data from JSONPlaceholder API
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data); // Update state with the fetched data
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <h1>All Posts</h1>
      <div>
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            title={post.title} 
            content={post.body} 
            userId={post.userId} 
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
