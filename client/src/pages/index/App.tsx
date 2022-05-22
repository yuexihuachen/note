import React from 'react';
import { Menu } from './features/menu/Menu';
import { useGetSearchByNameQuery } from './app/services/counter'
import './App.scss';

function App() {
  const response = useGetSearchByNameQuery('search')
  console.log(response)
  return (
    <div className="App">
     <Menu />
    </div>
  );
}

export default App;
