import React, { Component } from 'react';
import {connect} from 'react-redux';




import  st from './AddUser.module.css';

class AddUser extends  Component{

    render(){
        return(
            <div className={st.addUser}>
            <h3 className={st.label}>Добавление сотрудника:</h3>

            <p className={st.label}>Имя:</p>
                <textarea></textarea>

            <p className={st.label}>Фамилия:</p>
                <textarea></textarea>

            <p className={st.label}>Должность:</p>    
                <textarea></textarea>

             <p className={st.label}>Адрес:</p>
                <textarea></textarea>

            <p className={st.label}>Ссылка на gravatar</p>    
                <textarea></textarea>    


            </div>
        );
    }
}

export default connect(state => ({
    COMMENT: state.COMMENT

}),
 dispatch => ({
   
})
)(AddUser);