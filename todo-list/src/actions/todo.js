import * as types from '../types/todo';

export const addTodo = (todo) => ({
    type: types.ADD_TODO,
    payload: todo
 });

export const completeTodo = (id) => ({
    type: types.COMPLETE_TODO,
    payload: {id} 
 });