import React, { Component } from 'react';
import {connect} from 'react-redux';




import  st from './AddUser.module.css';

class AddUser extends  Component{
    constructor (props){
        super(props);
      
      
      this.newName = React.createRef();
      this.newSurname =  React.createRef();
      this.newPosition = React.createRef();
      this.newAdress = React.createRef();
      this.newAvatar= React.createRef();

      this.state= this.props.state;

      
    }
    componentWillMount(){
    // console.log('this.props.ADD_NAME_VALUE', this.props.state);
      
    }
    newNameValue = (e) =>{
        let newNameElem =e.target.value;
        
        this.props.newName('ADD_NAME_VALUE',newNameElem);
    }

    newSurnameValue = (e) =>{
        let newSurnameElem =e.target.value;
        
        this.props.newSurname('ADD_SURNAME_VALUE',newSurnameElem);
    }

    newPositionValue = (e) =>{
        let newPositionElem =e.target.value;
        
        this.props.newPosition('ADD_POSITION_VALUE',newPositionElem);
    }

    newAdressValue = (e) =>{
        let newAdressElem =e.target.value;
        
        this.props.newAdress('ADD_ADRESS_VALUE',newAdressElem); 
    }

    newAvatarValue = (e) =>{
        let newAvatarElem =e.target.value;
        
        this.props.newAvatar('ADD_IMG_VALUE',newAvatarElem); 
    }
    addUser =() =>{

        this.props.addUser("ADD_NEW_USER");
        console.log('addUser',this.props.state);
        
    }
    
    
    render(){
       

        return(
            <div className={st.addUser}>
            <h3 className={st.label}>Добавление сотрудника:</h3>

            <p className={st.label}>Имя:</p>
                <textarea ref={this.newName} onChange={this.newNameValue} ></textarea>

            <p className={st.label}>Фамилия:</p>
                <textarea ref={this.newSurname} onChange={this.newSurnameValue} ></textarea>

            <p className={st.label}>Должность:</p>    
                <textarea ref={this.newPosition} onChange={this.newPositionValue} ></textarea>

             <p className={st.label}>Адрес:</p>
                <textarea ref={this.newAdress} onChange={this.newAdressValue}></textarea>

            <p className={st.label}>Ссылка на gravatar</p>    
                <textarea ref={this.newAvatar} onChange={this.newAvatarValue}></textarea>    
            <p className={st.label}></p>   
            <button onClick={this.addUser} className={st.button}>Добавить</button>  

            </div>
        );
    }
}

export default connect(
    state => ({
        AddUserState: state.NEW_USER
    
}),
 dispatch => ({
    addUser: (type) => { 
        dispatch({type: type});
      },
    newName: (type,value) => { 
        dispatch({type: type, text: value});
      },
    newSurname: (type,value) => { 
        dispatch({type: type, text: value});
      },
    newPosition: (type,value) => { 
        dispatch({type: type, text: value});
      },
    newAdress: (type,value) => { 
        dispatch({type: type, text: value});
      },
    newAvatar: (type,value) => { 
        dispatch({type: type, text: value});
      },
})
)(AddUser);