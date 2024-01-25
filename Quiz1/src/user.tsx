import React from 'react';

interface UserProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string[];
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  };
  onDelete: () => void;
}

const User: React.FC<UserProps> = ({ user, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{user.name}</h3>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email.join(', ')}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city},{' '}
        {user.address.zipcode}
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default User;