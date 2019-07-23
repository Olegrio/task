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
      case 'ADD_TITLE_VALUE':state.NEW_VALUE.NEW_TITLE_VALUE = action.text;
      return state ;
      case 'ADD_COMMENT_VALUE':state.NEW_VALUE.NEW_COMMENT_VALUE = action.text;
      return state ;
      case 'ADD_PHONE_VALUE':state.NEW_VALUE.NEW_PHONE_VALUE = action.text;
      return state ;
      case 'ADD_NEW_COMMENT': 
      let newComment = {
         "text":  state.NEW_VALUE.NEW_COMMENT_VALUE,
        "userId": action.userId,
         "title": state.NEW_VALUE.NEW_TITLE_VALUE,
        "phone": state.NEW_VALUE.NEW_PHONE_VALUE
    }
    state.COMMENT.push(newComment);
       return state ;
     
   default : return state;
}
}

const store = createStore (reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store= {store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
