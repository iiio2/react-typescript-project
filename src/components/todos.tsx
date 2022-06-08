import React from 'react';
import Todo from '../models/todo';

interface TodoProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onTodoUpdate: (todo: Todo) => void;
}

const TodoList = ({
  todos,
  onDeleteTodo,
  onTodoUpdate,
}: TodoProps): JSX.Element => {
  return (
    <>
      <h3>Todo</h3>
      <p>Showing {todos.length} todos!</p>
      <ul className='list-group'>
        {todos.map((todo) => (
          <li className='list-group-item' key={todo.id}>
            {todo.title}
            <button
              onClick={() => onDeleteTodo(todo.id)}
              className='btn btn-outline-danger mx-2 rounded-pill'
            >
              delete
            </button>
            <button
              onClick={() => onTodoUpdate(todo)}
              className='btn btn-outline-info rounded-pill'
            >
              update
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
