import { combineReducers } from 'redux';

import * as types from '../types/todo';

const todos = (state = [], action) => {
    switch(action.type) {
        case types.ADD_TODO: {
            return [...state, todo(undefined, action)]
        }
        case types.COMPLETE_TODO: {
            return state.map(to => todo(to, action))
        }
        default: {
            return state;
        }
    }
}


const todo = (state = {}, action) => {
    switch(action.type) {
        case types.ADD_TODO: {
            return {
                id: action.id,
                description: action.description,
                completed: false
            }
        }
        case types.COMPLETE_TODO: {
            if (state.id !== action.id) {
                return state;
            } else {
                return {
                    // mantener los detalles
                    ...state,
                    completed: !state.completed
                }
            }
        }
        default: {
            return state;
        }
    }
}

const todosReducer = combineReducers({
    todos,
    todo
})

export default todosReducer;

export const getTodos = state => state;
export const getTodo = (state, index) => state[index];