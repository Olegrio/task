import React, { Component } from 'react';


import  st from './AddComment.module.css';


class AddComment extends Component{

    constructor (props){
        super(props);
      this.avatar_src = this.props.state.img;

      this.newTitle = React.createRef();
      this.newComment =  React.createRef();
      this.newPhone = React.createRef();
      this.sizeAvatar= '?s=100';
    }

    render(){

        return(
            <div className={st.AddComment}>

            <img alt='' src={`${this.avatar_src}${this.sizeAvatar}`}/>
           
            <p className={st.item}>Заголовок</p>
            <textarea ref={this.newTitle}  className={st.textareaTitle} />
           

            
            <p className={st.item}>Текст поста</p> 
            <textarea className={st.textareaText}  />
            

            
            <p className={st.item}>Телефон</p>
            <textarea ref={this.newPhone}  className={st.textareaPhone}  />
            
            <div  className={st.item}>
            <button className={st.button}>Отправить</button>     
            </div>
            </div>
        )

        
    }
}

export default AddComment;