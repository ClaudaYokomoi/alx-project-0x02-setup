import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

// Optional: Add some simple styling for the card
const cardStyle = {
  border: '1px solid #ccc',
  padding: '16px',
  borderRadius: '8px',
  maxWidth: '300px',
  margin: '10px auto',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

export default Card;
