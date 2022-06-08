import axios from 'axios';
import Todo from '../models/todo';

class TodoService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  async getTodos() {
    const result = await this.http.get<Todo[]>('/todos');
    return result.data;
  }

  async addTodo(title: string) {
    const result = await this.http.post<Todo>('/todos', { title });
    return result.data;
  }

  async removeTodo(id: number) {
    const result = await this.http.delete('/todos/' + id);
    return result.data;
  }

  async updateTodo(todo: Todo) {
    const result = await this.http.put<Todo>('/todos/' + todo.id, todo);
    console.log(result.data);

    return result.data;
  }
}

export default new TodoService();
