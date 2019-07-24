import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import OneUser from '../OneUser/OneUser';
import OneComment from '../OneComment/OneComment';
import AddComment from '../AddComment/AddComment';
import SlideView from '../Carousel/SlideView';
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
    // this.array_comment = this.props.COMMENT.filter(data=> Number(data.userId) ===this.user_id );
    // this.array_comment_component =  this.array_comment.map((data,key)=><OneComment state={data} key={key} /> );
  
     
    }
    
   componentWillMount(){
    

    
    
   }
   

    render(){
        return(
            <div className={st.UserProfilePage}>
            <div className={st.Slider}>
            <SlideView />
            </div>
              <OneUser state={this.USER_PROFILE[this.user_id]} />
              <div className={st.full_description} >
                    <ul>
                        <li><p>{this.adress} </p></li>                   
                    </ul>
              </div>
              <div className={st.comments} user_id={ this.user_id}>
             {/* {this.array_comment_component} */}
             <div id='comments'></div>
              <AddComment  store= {this.props.store} NEW_VALUE={this.props.NEW_VALUE} user_id={this.user_id } />
              </div>
              
                    
                
            </div>

        )
    }
    componentDidMount(){
        let renderComments = () => {
            let temp = 0;
            this.array_comment = this.props.COMMENT.filter(data=> Number(data.userId) ===this.user_id );
            this.array_comment_component =  this.array_comment.map((data,key) => ( this.array_comment.length > 5 ?( key>this.array_comment.length-6 ? <OneComment state={data} key={key} /> : temp = true ): <OneComment state={data} key={key} />) );
            // this.array_comment.length > 5 ? this.array_comment_component = this.array_comment.splice(0,this.array_comment.length - 5).map((data,key)=><OneComment state={data} key={key} /> ) : this.array_comment_component =  this.array_comment.map((data,key)=><OneComment state={data} key={key} /> ); 
           
            ReactDOM.render(
                <div>
{this.array_comment_component}
                </div>
            , document.getElementById('comments'))
            
            };
            renderComments();
            this.props.store.subscribe(renderComments);
    }
}




// export default UserProfilePage;

export default connect(
    state => ({
       COMMENT: state.COMMENT
   
  }),
    dispatch => ({
      addValue: (type,value) => { 
          dispatch({type: type, text: value });
        }
  })
    )(UserProfilePage);