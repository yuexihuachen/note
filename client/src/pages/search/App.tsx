import React from 'react';
import { Content } from './features/content'
import { Header } from './features/header'
import Login from '../../components/login'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Login />
    </div>
  );
}

export default App;
