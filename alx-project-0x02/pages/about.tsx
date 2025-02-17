import React from 'react';
import Header from '@/components/layout/Header'; // Import Header
import Button from '@/components/common/Button'; // Import Button component

const About = () => {
  return (
    <div>
      <Header /> {/* Ensure Header is used */}
      <h1>About Page</h1>
      <Button size="small" shape="rounded-sm">Small Rounded Button</Button>
      <Button size="medium" shape="rounded-md">Medium Rounded Button</Button>
      <Button size="large" shape="rounded-full">Large Rounded Button</Button>
    </div>
  );
};

export default About;
