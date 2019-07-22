import React, { Component } from 'react';
import {connect} from 'react-redux';


import OneUser from '../OneUser/OneUser';

import  st from './UserList.module.css';



class UserList extends Component{
    constructor (props){
        super(props);
      this.arrayOneUser = this.props.UserList.map((data, key)=><OneUser  key={key} state={data} /> )
     
        
        
    }
    componentWillMount(){

        console.log('UserList',this.props.UserList);
    }


    render(){
        return(
                <div className={st.UserList}>
                    
                        {this.arrayOneUser}       
                               
                </div>
        )
    }
}



export default connect(
    state => ({
        UserList: state.USER_PROFILE
  }),
    dispatch => ({
        addValue: (type,value) => { 
          dispatch({type: type, text: value });
        }
  })
    )(UserList);