import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header'; // Updated import path
import PostCard from '@/components/common/PostCard'; // Import PostCard
import { PostProps } from '@/interfaces'; // Ensure the correct path

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  // Fetch posts data from JSONPlaceholder API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header /> {/* Ensure Header is used */}
      <h1>All Posts</h1>
      <div>
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            title={post.title} 
            content={post.body} 
            userId={pos
