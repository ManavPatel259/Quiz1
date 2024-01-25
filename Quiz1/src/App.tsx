import React, { useState } from 'react';
import User from './user';
import FilterByName from './FilterByName';

interface UserProps {
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
}

const App: React.FC = () => {
  const initialUsers: UserProps[] = [
    

 {
   id: 1,

   name: 'Leanne Graham',

   username: 'Bret',

   email: ['Sincere@april.biz', 'test@april.biz'],

   address: {
    street: 'Kulas Light',

    suite: 'Apt. 556',

    city: 'Gwenborough',

    zipcode: '92998-3874',
  },
 },

 {
   id: 2,

   name: 'Ervin Howell',

   username: 'Antonette',

   email: ['Shanna@melissa.tv', 'ervin@melissa.tv'],

   address: {
    street: 'Victor Plains',

    suite: 'Suite 879',

    city: 'Wisokyburgh',

    zipcode: '90566-7771',
  },
 },

 {
   id: 3,

   name: 'Clementine Bauch',

   username: 'Samantha',

   email: ['Nathan@yesenia.net', 'clement@yesenia.net'],

   address: {
    street: 'Douglas Extension',

    suite: 'Suite 847',

    city: 'McKenziehaven',

    zipcode: '59590-4157',
  },
 },

  ];

  const [users, setUsers] = useState<UserProps[]>(initialUsers);

  const handleDeleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>User List</h1>
      <FilterByName initialUsers={initialUsers} setUsers={setUsers} />
      {users.map((user) => (
        <User key={user.id} user={user} onDelete={() => handleDeleteUser(user.id)} />
      ))}
    </div>
  );
};

export default App;