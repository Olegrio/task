import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import initialState from './state.js'



let reducer = (state=initialState.initialState,action) => {
    switch(action.type){
      case 'SITE': return  { 
          ...state, 
          _site_value: action.text
     };
     
   default : return state;
}}

const store = createStore (reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store= {store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();