import React, { Component } from 'react';



import  st from './OneComment.module.css';


class OneComment extends Component{
    constructor (props){
        super(props);
        this.title = this.props.state.title;
        this.text = this.props.state.text;
        this.phone = this.props.state.phone;

    }
    componentWillMount(){

        
    }

    render(){
        return(
            <div className={st.comment}>
                 <div className={st.title}><p>{ this.title}</p></div>
                 <div className={st.text}><p>{ this.text}</p></div>
                 <div className={st.phone}><p>{ this.phone}</p></div>
            </div>

)

    }
}

export default OneComment;