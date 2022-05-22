import React from 'react';
//import Login from '../../components/login';
import { Content } from './features/content'
import { Header } from './features/header'
import { Footer } from './features/footer'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
