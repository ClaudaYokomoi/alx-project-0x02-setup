import React from 'react';
import Card from '../components/common/Card';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      
      <Card
        title="Card 1"
        content="This is the content of the first card. It can be anything!"
      />
      
      <Card
        title="Card 2"
        content="This is the content of the second card. You can add more content here!"
      />
      
      <Card
        title="Card 3"
        content="The third card is here. You can keep adding different content!"
      />
    </div>
  );
};

export default Home;
