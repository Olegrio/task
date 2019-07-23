import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

import  st from './OneUser.module.css';


class OneUser extends Component{

    constructor (props){
        super(props);
      this.avatar_src = this.props.state.img;
      this.name = this.props.state.name;
      this.surname =this.props.state.surname;
      this.position =this.props.state.position;
      this.id = this.props.state.id;
      this.sizeAvatar = '?s=150';
        
        
    }
componentWillMount(){
 
    

}

    render(){
        return(
            <div className={st.OneUser}>
                <div className={st.OneUser_avatar}>
                <NavLink to={'/user/'+ this.id}> 
                    <img src={`${this.avatar_src}${this.sizeAvatar}`} alt={`avatar ${this.name}`} />
                 </NavLink>   
                </div>
                <div className={st.OneUser_description}>
                    <ul className={st.description_list} >
                    <NavLink to={'/user/'+ this.id}> 
                    <li className={st.description_name}><p>{this.name}</p> </li>
                    </NavLink>  
                        <li className={st.description_surname}> <p>{this.surname}</p> </li>
                        <li className={st.description_position}><p> {this.position}</p></li>
                    </ul>    
                </div>                      
            </div>
        )
    }
}




export default OneUser;