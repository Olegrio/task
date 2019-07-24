import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';

import  st from './AddComment.module.css';


class AddComment extends Component{

    constructor (props){
        super(props);
      this.avatar_src = this.props.state.USER_PROFILE[this.props.user_id].img;
      
      
      this.newTitle = React.createRef();
      this.newComment =  React.createRef();
      this.newPhone = React.createRef();
      this.sizeAvatar= '?s=100';
    }
    componentWillMount(){
     
     
    }

  
    onTitleValue = (e) => {
      let newTitleElem =e.target.value;   
      this.props.addValue("ADD_TITLE_VALUE",newTitleElem);
     
     }

     onCommentValue = (e) => {
      let newCommentElem =e.target.value;   
      this.props.addValue("ADD_COMMENT_VALUE",newCommentElem);
     }

     onPhoneValue = (e) => {
      const re = /^[0-9\b]+$/;
      let newPhoneElem =e.target.value;   

      re.test(e.target.value) ? this.props.addValue("ADD_PHONE_VALUE",newPhoneElem) : console.log('не число') ;
      
      
     }

    addComment = () => {
      
      this.props.addComment("ADD_NEW_COMMENT",this.props.user_id);
      
      
      console.log('addComment',this.props.state);
    }
    renderAddComment = () => {
        

      ReactDOM.render(
        
        <div  className={st.AddComment}>

         <img alt='' src={`${this.avatar_src}${this.sizeAvatar}`}/> 
         <p className={st.item}>Заголовок</p>
          <textarea ref={this.newTitle} onChange={this.onTitleValue}  value={this.props.NEW_VALUE.NEW_TITLE_VALUE} className={st.textareaTitle} />
         

          <p className={st.item}>Текст комментария</p> 
          <textarea ref={this.newComment} onChange={this.onCommentValue} value={this.props.NEW_VALUE.NEW_COMMENT_VALUE} className={st.textareaText}  />
         
          <p className={st.item}>Телефон</p>
          <textarea ref={this.newPhone} onChange={this.onPhoneValue} value={this.props.NEW_VALUE.NEW_PHONE_VALUE} className={st.textareaPhone}  />
          
          <div  className={st.item}>
          <button  onClick={this.addComment} className={st.button}>Отправить</button>     
          </div>
          
          </div>
    , document.getElementById('AddComment'))

    }
   
    render(){
     
         return(
          <span id ='AddComment'>
           
          </span>
        )       
    }
    
    componentDidMount(){
      this.renderAddComment();
      this.props.store.subscribe(this.renderAddComment)
    }
}

export default connect(
    state => ({
        state: state,
        
     
  }),
    dispatch => ({
      addValue: (type,value) => { 
          dispatch({type: type, text: value });
        },
      addComment:(type, id) =>{
        dispatch({type: type, userId: id });
      }
  })
    )(AddComment);