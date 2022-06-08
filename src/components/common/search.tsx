import React, { useState, useEffect } from 'react';

interface SearchProps {
  onSearch: (value: string) => void;
}

const Search = ({ onSearch }: SearchProps): JSX.Element => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    onSearch(value);
  }, [value]);

  return (
    <form>
      <label htmlFor='search'>Search</label>
      <input
        type='text'
        id='search'
        value={value}
        className='form-control'
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Search;
