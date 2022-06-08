import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import TodoList from './components/todos';
import Todo from './models/todo';
import NewTodo from './components/newTodo';
import Search from './components/common/search';
import Sort from './components/common/sort';
import FilterTodo from './components/common/filter';
import todoService from './services/todos';

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadTodos();
  }, [loading]);

  const loadTodos = async () => {
    setLoading(false);
    const result = await todoService.getTodos();
    setTodos(result);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = async (title: string) => {
    const result = await todoService.addTodo(title);
    setTodos([result, ...todos]);
  };

  const updateTodo = async (todo: Todo) => {
    const result = await todoService.updateTodo(todo);
    result.title = 'John Smith';
    const allTodos = [...todos];
    const index = todos.findIndex((t) => t.id === todo.id);
    allTodos[index] = { ...result };
    setTodos(allTodos);
  };

  const searchTodos = (value: string) => {
    if (value) {
      const result = todos.filter((todo) =>
        todo.title.includes(value.toLowerCase())
      );
      setTodos(result);
    } else {
      setLoading(true);
    }
  };

  const handleSort = (value: string) => {
    const sortedTodos =
      value === 'asc'
        ? _.orderBy(todos, ['title'], ['asc'])
        : _.orderBy(todos, ['title'], ['desc']);

    setTodos(sortedTodos);
  };

  const handleFilter = (value: string) => {
    if (value) {
      const filtered = todos.filter((todo) => todo.completed);
      setTodos(filtered);
    } else {
      setLoading(true);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <div className='row'>
        <div className='col-sm-4'>
          <NewTodo onAddTodo={addTodo} />
        </div>
        <div className='col-sm-3'>
          <Search onSearch={searchTodos} />
        </div>
        <div className='col-sm-2'>
          <Sort onSort={handleSort} />
        </div>
        <div className='col-sm-3'>
          <FilterTodo onFilter={handleFilter} />
        </div>
      </div>

      <TodoList
        todos={todos}
        onDeleteTodo={removeTodo}
        onTodoUpdate={updateTodo}
      />
    </main>
  );
};

export default App;
