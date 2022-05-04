import React from 'react';
import { Counter } from './features/counter/Counter';
import { useGetSearchByNameQuery, searchApi } from './app/services/counter'
import './App.scss';

function App() {
  const response = useGetSearchByNameQuery('search')
  console.log(response)
  const response1 = searchApi.endpoints.getSearchByName.useQuery('search')
  console.log(response1)
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
