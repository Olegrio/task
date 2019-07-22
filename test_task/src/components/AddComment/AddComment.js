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
    componentDidMount(){
       
        const titleValue = this.newTitle.current.textContent;
        const commentValue = this.newComment.current.textContent;
        const phoneValue = this.newPhone.current.textContent;
    }
    
   
    render(){
        

         return(
            <div className={st.AddComment}>

            <img alt='' src={`${this.avatar_src}${this.sizeAvatar}`}/>
           
            <p className={st.item}>Заголовок</p>
            <textarea ref={this.newTitle}  defaultValue='Заголовок' className={st.textareaTitle} />
           

            
            <p className={st.item}>Текст комментария</p> 
            <textarea ref={this.newComment} className={st.textareaText} defaultValue='Текст комментария' />
            

            
            <p className={st.item}>Телефон</p>
            <textarea ref={this.newPhone}  className={st.textareaPhone} defaultValue='Телефон' />
            
            <div  className={st.item}>
            <button onClick={this.addComment} className={st.button}>Отправить</button>     
            </div>
            </div>
        )

        
    }
}

export default AddComment;