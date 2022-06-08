import React from 'react';

interface SortTodos {
  onSort: (value: string) => void;
}

const Sort = ({ onSort }: SortTodos): JSX.Element => {
  return (
    <>
      <label htmlFor='sort'>Sort</label> <br />
      <button
        onClick={() => onSort('asc')}
        className='btn btn-outline-primary mx-2'
      >
        {' '}
        ASC
      </button>
      <button
        onClick={() => onSort('desc')}
        className='btn btn-outline-primary'
      >
        DESC
      </button>
    </>
  );
};

export default Sort;
