import React, { Component } from 'react';
import {connect} from 'react-redux';


import {Route} from 'react-router-dom';


import './App.css';
import UserProfilePage from './components/UserProfilePage/UserProfilePage';
import UserList from './components/UserList/UserList';

class App extends Component {
  
  componentWillMount(){
this.arrayRoute = this.props.AppState.USER_PROFILE.map((data,key)=> <Route key={key} path={"/user/"+data.id} component={ () =>  <UserProfilePage id_user ={data.id}  /> }  />);
console.log(this.props.AppState);
  }

  render(){

    return(

<div>

    
<Route  path='/users' component={ () => <UserList /> }  />
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
