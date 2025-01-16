export interface CardProps {
    title: string;
    content: string;
  }
  
  export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    onClick?: () => void; // Optional, for button click handling
  }