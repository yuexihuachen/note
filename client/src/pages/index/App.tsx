import React, { Profiler } from 'react';
import { Menu } from './features/menu';
import { Article } from './features/content'

import './App.scss';

function App() {
  const callback = (...args: any) => {
    console.log(args)
  }
  return (
    <div className="App">
      <Profiler id='prifiler' onRender={callback}>
      <Menu />
     <Article />
      </Profiler>
    </div>
  );
}

export default App;
