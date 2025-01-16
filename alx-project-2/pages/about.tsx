// pages/about.tsx

import React from 'react';
import Button from '../components/common/Button';

const About: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div>
        <Button size="small" shape="rounded-sm">Small Button</Button>
        <Button size="medium" shape="rounded-md">Medium Button</Button>
        <Button size="large" shape="rounded-full">Large Button</Button>
      </div>
    </div>
  );
};

export default About;
