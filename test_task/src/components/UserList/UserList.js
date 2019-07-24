import React, { Component } from 'react';
import {connect} from 'react-redux';


import OneUser from '../OneUser/OneUser';
import AddUser from '../AddUser/AddUser';

import  st from './UserList.module.css';



class UserList extends Component{
    constructor (props){
        super(props);
     
        this.arrayOneUser = this.props.UserList.map((data, key)=><OneUser  key={key} state={data} /> )
        
    }
    componentWillMount(){

        console.log('UserList',this.props.NEW_USER);
        
    
    }
    
   
    render(){
      let addUserBlock=()=>{
     
       document.getElementsByClassName('adduser')[0].setAttribute('style','display:block');
       document.getElementsByClassName(st.addUserBlock_img)[0].setAttribute('style','display:none')

      }

      let removeUserBlock=()=>{
     
        document.getElementsByClassName('adduser')[0].removeAttribute('style');
        document.getElementsByClassName(st.addUserBlock_img)[0].removeAttribute('style')
 
       }
     
        return(
                <div className={st.UserList}>
                        <div id="arrayUser"></div>
                           {this.arrayOneUser}
                        <div id="addUserBlock" className={st.addUserBlock} >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Plus_sign_font_awesome.svg/1024px-Plus_sign_font_awesome.svg.png" onClick={addUserBlock} alt="" className={st.addUserBlock_img} />
                        <div className={'adduser '+st.adduser} >
                        <img src="https://img2.pngindir.com/20190222/hbu/kisspng-plus-and-minus-signs-meno-computer-icons-negative-5c6f8527bd1a00.2100568415508124557746.jpg" onClick={removeUserBlock} alt="" className={st.addUserBlock_img} />
                        <AddUser state={this.props.state}  />
                        </div>
                        </div>  
                               
                </div>
        )
    }
   
}



export default connect(
    state => ({
        UserList: state.USER_PROFILE,
        NEW_USER: state.NEW_USER
  }),
    dispatch => ({
        addValue: (type,value) => { 
          dispatch({type: type, text: value });
        }
  })
    )(UserList);