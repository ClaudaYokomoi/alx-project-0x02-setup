import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/home">
              <span className="hover:text-blue-400">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-blue-400">About</span>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <span className="hover:text-blue-400">Posts</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
