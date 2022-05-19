import React from 'react';
import { Counter } from './features/counter/Counter';
import { useGetSearchByNameQuery } from './app/services/counter'
import './App.scss';

function App() {
  const response = useGetSearchByNameQuery('search')
  console.log(response)
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
