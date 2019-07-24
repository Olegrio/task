import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";




import {Route} from 'react-router-dom';


import './App.css';
import UserProfilePage from './components/UserProfilePage/UserProfilePage';
import UserList from './components/UserList/UserList';


import AddUser from './components/AddUser/AddUser';


class App extends Component {
  
  componentWillMount(){
this.arrayRoute = this.props.AppState.USER_PROFILE.map((data,key)=> <Route exact key={key} path={"/user/"+data.id} render={ () =>  <UserProfilePage NEW_VALUE={this.props.AppState.NEW_VALUE} store= {this.props.store}  state={this.props.AppState} id_user ={data.id}  /> }  />);
// console.log(this.props.AppState);

  }

  render(){

    return(

<div>
<NavLink className='goHome' to='/'><p >Домой</p> </NavLink> 
 <Route exact path='/' component={ () => <UserList store= {this.props.store}  state={this.props.AppState} NEW_USER={this.props.AppState.NEW_USER} /> }  />
 <Route exact path='/add' component={ () =><AddUser store= {this.props.store}  state={this.props.AppState} NEW_USER={this.props.AppState.NEW_USER} />}  /> 
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
