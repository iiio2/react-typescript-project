import React, { useState } from 'react';

interface NewTodoProps {
  onAddTodo: (title: string) => void;
}

const NewTodo = ({ onAddTodo }: NewTodoProps): JSX.Element => {
  const [title, setTitle] = useState('');

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor='title'>Title</label>
      <input
        id='title'
        type='text'
        className='form-control'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit' className='btn btn-primary rounded-pill my-3'>
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
