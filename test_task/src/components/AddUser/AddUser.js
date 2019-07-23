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

      this.stateUser = this.props.state.NEW_USER;

      
    }
    componentWillMount(){
console.log('this.props.ADD_NAME_VALUE',this.props.state.NEW_USER);

    }
    newNameValue = (e) =>{
        let newNameElem =e.target.value;
        console.log(this.stateUser.name);
        this.props.newName('ADD_NAME_VALUE',newNameElem);
    }

    newSurnameValue = (e) =>{
        let newSurnameElem =e.target.value;
        console.log(this.stateUser.surname);
        this.props.newSurname('ADD_SURNAME_VALUE',newSurnameElem);
    }

    newPositionValue = (e) =>{
        let newPositionElem =e.target.value;
        console.log(this.stateUser.position);
        this.props.newPosition('ADD_POSITION_VALUE',newPositionElem);
    }

    newAdressValue = (e) =>{
        let newAdressElem =e.target.value;
        console.log(this.stateUser.adress);
        this.props.newAdress('ADD_ADRESS_VALUE',newAdressElem); 
    }

    newAvatarValue = (e) =>{
        let newAvatarElem =e.target.value;
        console.log(this.stateUser.img);
        this.props.newAvatar('ADD_IMG_VALUE',newAvatarElem); 
    }
    
    render(){
        return(
            <div className={st.addUser}>
            <h3 className={st.label}>Добавление сотрудника:</h3>

            <p className={st.label}>Имя:</p>
                <textarea ref={this.newName} onChange={this.newNameValue} value={this.stateUser.name}></textarea>

            <p className={st.label}>Фамилия:</p>
                <textarea ref={this.newSurname} onChange={this.newSurnameValue} value={this.stateUser.surname}></textarea>

            <p className={st.label}>Должность:</p>    
                <textarea ref={this.newPosition} onChange={this.newPositionValue} value={this.stateUser.position}></textarea>

             <p className={st.label}>Адрес:</p>
                <textarea ref={this.newAdress} onChange={this.newAdressValue} value={this.stateUser.adress}></textarea>

            <p className={st.label}>Ссылка на gravatar</p>    
                <textarea ref={this.newAvatar} onChange={this.newAvatarValue} value={this.stateUser.img}></textarea>    


            </div>
        );
    }
}

export default connect(state => ({
    state: state,
   
    
}),
 dispatch => ({
    newName: (type,value) => { 
        dispatch({type: type, text: value });
      },
    newSurname: (type,value) => { 
        dispatch({type: type, text: value });
      },
    newPosition: (type,value) => { 
        dispatch({type: type, text: value });
      },
    newAdress: (type,value) => { 
        dispatch({type: type, text: value });
      },
    newAvatar: (type,value) => { 
        dispatch({type: type, text: value });
      },
   
})
)(AddUser);