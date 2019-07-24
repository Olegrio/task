import React, { Component } from 'react';
import {connect} from 'react-redux';


import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";




import {Route} from 'react-router-dom';


import './App.css';
import UserProfilePage from './components/UserProfilePage/UserProfilePage';
import UserList from './components/UserList/UserList';
import AddComment from './components/AddComment/AddComment';

import AddUser from './components/AddUser/AddUser';


class App extends Component {
  
  componentWillMount(){
this.arrayRoute = this.props.AppState.USER_PROFILE.map((data,key)=> <Route exact key={key} path={"/user/"+data.id} render={ () =>  <UserProfilePage NEW_VALUE={this.props.AppState.NEW_VALUE} store= {this.props.store}  state={this.props.AppState} id_user ={data.id}  /> }  />);
console.log(this.props.AppState);

  }

  render(){

    return(

<div>
      
  <Route exact path='/' component={ () => <UserList /> }  />
  <Route exact path='/add' component={ () =><AddUser NEW_USER={this.props.AppState.NEW_USER}/>}  />
  {this.arrayRoute}

</div>

    )
  }
}


export default connect(
  state => ({
      AppState: state
}),
  dispatch => ({
      addValue: (type,value) => { 
      dispatch({type: type, text: value });
      }
})
  )(App);
