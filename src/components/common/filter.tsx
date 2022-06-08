import React from 'react';

interface FilterProps {
  onFilter: (value: string) => void;
}

const FilterTodo = ({ onFilter }: FilterProps): JSX.Element => {
  return (
    <>
      <label htmlFor='filter'>Filter by Completed</label> <br />
      <button
        onClick={() => onFilter('filter')}
        className='btn btn-outline-secondary btn-sm mx-1'
      >
        Completed Todos
      </button>
      <button
        onClick={() => onFilter('')}
        className='btn btn-outline-info btn-sm'
      >
        All Todos
      </button>
    </>
  );
};

export default FilterTodo;
