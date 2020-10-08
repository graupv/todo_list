import * as types from '../types/todo';

export const addTodo = (description) => ({
    type: types.ADD_TODO,
    payload: {
        id,
        description
    } 
 });

export const completeTodo = (id) => ({
    type: types.COMPLETE_TODO,
    payload: {id} 
 });