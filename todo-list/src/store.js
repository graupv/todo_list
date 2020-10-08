import { createStore, compose } from 'redux';

import {
    persistStore,
    persistReducer,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  
  import reducer from './reducers/index';

  export const configureStore = () => {
    const persistedReducer = persistReducer(
        {
          key: 'root',
          storage,
          // whitelist: ['auth'],
          //  whitelist ['reducer_name']
        },
        reducer,
      );

      let composeEnhancers = compose;
      if (process.env.NODE_ENV === 'development') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      }

      const store = composeEnhancers()(createStore)(persistedReducer);

      const persistor = persistStore(store);
      return { store, persistor };
    
  }