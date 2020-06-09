import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';

const App = () => {
  return (
    <Provider store={store}>
      <main className="App--container">
        <Display />
        <Keypad />
      </main>
    </Provider>
  );
};

export default App;
