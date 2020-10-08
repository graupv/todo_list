import * as types from '../types/todo';

export const addTodo = (phrase) => ({
    type: types.ADD_TODO,
    payload: {
        id,
        description
    } 
 });

export const completeTodo = (index) => ({
    type: types.COMPLETE_TODO,
    payload: {index} 
 });