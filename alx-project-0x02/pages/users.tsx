import React from 'react';
import UserCard from '@/components/common/UserCard';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

interface UsersPageProps {
  users: User[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

// ✅ Implement getStaticProps for pre-fetching user data at build time
export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();

    return {
      props: { users },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: { users: [] }, // Return an empty array if fetching fails
    };
  }
}
