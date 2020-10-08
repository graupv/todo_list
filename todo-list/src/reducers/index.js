import { combineReducers } from 'redux';

import todosReducer, * as todosSelectors from './todo'


const reducer = combineReducers({
    todosReducer
});
// const reducer = todosReducer;
export default reducer;

export const getTodos = (state) => todosSelectors.getTodos(state.todosReducer);
export const getTodo = (state, index) => todosSelectors.getTodo(state.todosReducer, index);

