import React from 'react';
import { StyledFilter, StyledFilterIInput } from './Filter.styled';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <StyledFilter>
      <StyledFilterIInput
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Find contacts by name"
      />
    </StyledFilter>
  );
};
