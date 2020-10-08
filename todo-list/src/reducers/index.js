import { combineReducers } from 'redux';

import todosReducer, * as todosSelectors from './todo'


const reducer = combineReducers({
    todosReducer
});
export default reducer;

export const getTodos = (state) => todosSelectors.getTodos(state);

