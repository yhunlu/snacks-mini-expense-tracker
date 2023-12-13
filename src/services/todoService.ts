import { CACHE_KEY_TODOS } from '../utils/constants';
import APIClient from './apiClient';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export default new APIClient<Todo>(`/${CACHE_KEY_TODOS}`);
