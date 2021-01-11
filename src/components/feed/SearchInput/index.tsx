import React, {memo} from 'react';

import {IHandleChange} from '../../../types';
import {ReactComponent as SearchIcon} from '../../../assets/icons/searchIcon.svg';

interface ISearchBarProps {
  value: any;
  handleChange: IHandleChange;
}

function SearchBar({value, handleChange}: ISearchBarProps): JSX.Element {
  return (
    <div className='searchBar'>
      <label className='searchBar__label' htmlFor='searchInput'>
        <SearchIcon></SearchIcon>
      </label>
      <input
        className='searchBar__input'
        id='searchInput'
        name='searchInput'
        value={value}
        onChange={handleChange}
        type='text'
        placeholder='Type name'
        autoComplete='false'
        spellCheck='false'
      />
    </div>
  );
}

export default memo(SearchBar);
