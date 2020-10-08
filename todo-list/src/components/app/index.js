import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { createStore } from 'redux';

// import reducer from '../../reducers/index'

import TodoList from '../todolist'
import AddTodo from '../AddTodo';

import './styles.css';

import { configureStore } from '../../store';

// const store = createStore(
//     reducer
// )

const { store, persistor} = configureStore();

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

            <AddTodo />
            <TodoList />
        </PersistGate>
    </Provider>
)

export default App;