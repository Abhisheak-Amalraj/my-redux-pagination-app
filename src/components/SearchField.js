import React from 'react';
import TextField from '@mui/material/TextField';

const SearchField = ({ handleSearchChange, searchValue }) => {
  return (
    <div>
      <TextField
        value={searchValue}
        onChange={handleSearchChange}
        label="Search books..."
        variant="outlined"
      />
    </div>
  );
};

export default SearchField;
