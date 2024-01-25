import React, { useState } from 'react';

interface FilterByNameProps {
  initialUsers: any[]; 
  setUsers: React.Dispatch<React.SetStateAction<any[]>>;
}

const FilterByName: React.FC<FilterByNameProps> = ({ initialUsers, setUsers }) => {
  const [filterName, setFilterName] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();

    // Perform filtering logic
    const filteredUsers = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    );

    // Update the state with filtered users
    setUsers(filteredUsers);
    setFilterName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filterName}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default FilterByName;