import React from 'react';
import './App.css';
import Main from './containers/Main';
import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
