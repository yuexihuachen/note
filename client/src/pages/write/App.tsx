import React from 'react';
import { Content } from './features/content'
import { Header } from './features/header'
import { Footer } from './features/footer'
import Login from '../../components/login'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
