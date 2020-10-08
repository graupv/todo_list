import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from '../../reducers/index'

import TodoList from '../todolist'
// import AddTodo from '../AddTodo'
// import Counter from '../counter'
import './styles.css';

// import { configureStore } from '../../store';
const store = createStore(
    reducer
)

const App = () => (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

export default App;