import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import initialState from './state.js'



let reducer = (state=initialState.initialState,action) => {

state.NEW_VALUE.NEW_TITLE_VALUE.length > 5 && state.NEW_VALUE.NEW_COMMENT_VALUE !=='' && state.NEW_VALUE.NEW_PHONE_VALUE !=='' ? state.NEW_VALUE.WELL_VALUE = true: state.NEW_VALUE.WELL_VALUE = false ;
    switch(action.type){
      case 'ADD_TITLE_VALUE':state.NEW_VALUE.NEW_TITLE_VALUE = action.text;
      return state ;
      case 'ADD_COMMENT_VALUE':state.NEW_VALUE.NEW_COMMENT_VALUE = action.text;
      return state ;
      case 'ADD_PHONE_VALUE':state.NEW_VALUE.NEW_PHONE_VALUE = action.text;
      return state ;
      case 'ADD_NEW_COMMENT': 
      if(state.NEW_VALUE.NEW_TITLE_VALUE.length > 5 && state.NEW_VALUE.NEW_COMMENT_VALUE !=='' && state.NEW_VALUE.NEW_PHONE_VALUE !=='' ){  let newComment = {
        "text":  state.NEW_VALUE.NEW_COMMENT_VALUE,
        "userId": action.userId,
        "title": state.NEW_VALUE.NEW_TITLE_VALUE,
        "phone": state.NEW_VALUE.NEW_PHONE_VALUE
    }
    state.COMMENT.push(newComment);
    state.NEW_VALUE.NEW_TITLE_VALUE = '';
    state.NEW_VALUE.NEW_COMMENT_VALUE = '';
    state.NEW_VALUE.NEW_PHONE_VALUE = '';} else { console.log('заполните поля')}

       return state ;
       
      case 'ADD_NAME_VALUE':state.NEW_USER.name = action.text;
      return state ;
      case 'ADD_SURNAME_VALUE':state.NEW_USER.surname = action.text;
      return state ;
      case 'ADD_IMG_VALUE':state.NEW_USER.img = action.text;
      return state ;
      case 'ADD_POSITION_VALUE':state.NEW_USER.position = action.text;
      return state ;
      case 'ADD_ADRESS_VALUE':state.NEW_USER.adress = action.text;
      return state ;

      case "ADD_NEW_USER": 
      let newUser = {
        "name":  state.NEW_USER.name,
        "surname": state.NEW_USER.surname,
        "img": state.NEW_USER.img,
        "text":"",
        "position":state.NEW_USER.position,
        "id": state.USER_PROFILE.length+1,
        "adress":state.NEW_USER.adress
    }
    state.USER_PROFILE.push(newUser);

    return state ;
      
     
   default : return state;
}

}

const store = createStore (reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


let renderDom = () => {

ReactDOM.render(
    <Provider store= {store} >
        <BrowserRouter>
            <App store= {store} />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'))

};

renderDom();


