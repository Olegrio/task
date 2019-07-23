import React, { Component } from 'react';
import {connect} from 'react-redux';

import OneUser from '../OneUser/OneUser';
import OneComment from '../OneComment/OneComment';
import AddComment from '../AddComment/AddComment';

import  st from './UserProfilePage.module.css';

class UserProfilePage extends Component{
    constructor (props){
        super(props);
        
    //   this.adress = this.props.UserProfilePage.adress;
    //   this.user_id = this.props.UserProfilePage.id;
    //   this.array_comment =  this.props.COMMENT.map((data,key)=><OneComment state={data} key={key} /> );
    this.user_id = this.props.id_user;
    
    this.USER_PROFILE = this.props.state.USER_PROFILE ;
    this.USER_PROFILE = this.props.state.USER_PROFILE ;

    this.adress = this.props.state.USER_PROFILE[this.user_id].adress;
    this.array_comment = this.props.COMMENT.filter(data=> Number(data.userId) ===this.user_id );
    this.array_comment_component =  this.array_comment.map((data,key)=><OneComment state={data} key={key} /> );
  
     
    }
    componentWillMount(){
console.log('this.props.COMMEN',this.props.COMMENT);

    }
   
   

    render(){
        return(
            <div className={st.UserProfilePage}>
              <OneUser state={this.USER_PROFILE[this.user_id]} />
              <div className={st.full_description} >
                    <ul>
                        <li><p>{this.adress} </p></li>                   
                    </ul>
              </div>
              <div className={st.comments} user_id={ this.user_id}>
             {this.array_comment_component}
              <AddComment NEW_VALUE={this.props.NEW_VALUE} user_id={this.user_id } />
              </div>
              
                    
                
            </div>

        )
    }
}




// export default UserProfilePage;

export default connect(
    state => ({
        state: state,
        COMMENT: state.COMMENT
   
  }),
    dispatch => ({
      addValue: (type,value) => { 
          dispatch({type: type, text: value });
        }
  })
    )(UserProfilePage);