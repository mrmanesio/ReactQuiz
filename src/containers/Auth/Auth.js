import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';


export default class Auth extends Component {
  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: "Email",
        errorMessage: 'Введите корректный Email',
        vaild: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        formControls: {
          password: {
            value: '',
            type: 'password',
            label: "Пароль",
            errorMessage: 'Введите корректный пароль',
            vaild: false,
            touched: false,
            validation: {
              required: true,
              minLength: 6
            }
      }
    }
  }

  renderInputs = () => {
    const inputs = Object.keys(this.state.formControls).map((controlName, index) => {
      
    }) 
  }

  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>

            this.renderInputs();

            <Button type="success" onClick={this.loginHandler}>
              Войти
            </Button>
            <Button type="primary" onClick={this.registerHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
