import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main'
import { Provider } from 'react-redux';
import configureStore from './store'
const store = configureStore();

const App = () => (
  <Provider store = {store}>
  <Main/>
  </Provider>
)

export default App;
