import * as types from '../types/addTodo';

export const addTodo = (id, description) => ({
    type: types.ADD_TODO,
    payload: {
        id,
        description
    } 
 });

