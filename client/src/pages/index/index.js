import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer
})

ReactDOMClient.createRoot(document.getElementById('root'))
  .render(<Provider store={store}>
    <App />
  </Provider>);
