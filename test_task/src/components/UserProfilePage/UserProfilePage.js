import React, { Component } from 'react';
import {connect} from 'react-redux';

import OneUser from '../OneUser/OneUser';
import OneComment from '../OneComment/OneComment';
import AddComment from '../AddComment/AddComment';

import  st from './UserProfilePage.module.css';

class UserProfilePage extends Component{
    constructor (props){
        super(props);
      this.adress = this.props.UserProfilePage.adress;
      this.user_id = this.props.UserProfilePage.id;
      this.array_comment =  this.props.COMMENT.map((data,key)=><OneComment state={data} key={key} /> );

    
     
    }
    componentWillMount(){
console.log('UserProfilePage/state',this.props.st);

    }
   
   

    render(){
        return(
            <div className={st.UserProfilePage}>
              <OneUser state={this.props.UserProfilePage} />
              <div className={st.full_description} >
                    <ul>
                        <li><p>{this.adress} </p></li>                       
                    </ul>
              </div>
              <div className={st.comments} user_id={ this.user_id}>
              { this.array_comment}
              <AddComment state={ this.props.UserProfilePage} />
              </div>
              
                    
                
            </div>

        )
    }
}


export default connect(
    state => ({
        UserProfilePage: state.USER_PROFILE[1],
        COMMENT: state.COMMENT.filter(data=> Number(data.userId) ===state.USER_PROFILE[1].id)
  }),
    dispatch => ({
        addValue: (type,value) => { 
          dispatch({type: type, text: value });
        }
  })
    )(UserProfilePage);