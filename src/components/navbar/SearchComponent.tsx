import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../../StyledComponentItem/StyledItem';


const SearchComponent = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

export default SearchComponent
