import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}> 
<BrowserRouter>
 <Switch>
   <PersistGate persistor={persistor}>
      <App />
  </PersistGate>
 </Switch>
</BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

