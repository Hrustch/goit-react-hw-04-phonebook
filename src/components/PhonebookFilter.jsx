import React from 'react';

export const PhonebookFilter = ({filter, onFilterChange}) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </>
  );
};
