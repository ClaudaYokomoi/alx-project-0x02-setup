// components/common/PostModal.tsx

import { useState } from 'react';

interface PostModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit: (title: string, content: string) => void;
}

const PostModal = ({ isOpen, closeModal, onSubmit }: PostModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    closeModal();
  };

  const modalStyles = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyles = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const closeButtonStyles = {
    position: 'absolute' as const,
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '24px',
  };

  return (
    isOpen && (
      <div style={modalStyles}>
        <div style={modalContentStyles}>
          <span style={closeButtonStyles} onClick={closeModal}>&times;</span>
          <h2>Create Post</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
              />
            </label>
            <label>
              Content:
              <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                required 
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  );
};

export default PostModal;
