// pages/home.tsx

import { useState } from 'react';
import PostModal from '../components/common/PostModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePostSubmit = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={openModal}>Create Post</button>

      <PostModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        onSubmit={handlePostSubmit} 
      />

      <div>
        <h2>Posts</h2>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
