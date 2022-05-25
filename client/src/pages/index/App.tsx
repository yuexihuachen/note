import React from 'react';
import { Menu } from './features/menu';
import { Article } from './features/content'

import './App.scss';

function App() {
  return (
    <div className="App">
     <Menu />
     <Article />
    </div>
  );
}

export default App;
