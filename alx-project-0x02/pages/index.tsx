// pages/index.tsx
import Header from '../components/layout/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2>Welcome to ALX Project 2!</h2>
        <p>This is a Next.js app with TypeScript and Tailwind CSS.</p>
      </main>
    </div>
  );
};

export default Home;
