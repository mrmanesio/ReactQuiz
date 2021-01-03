import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import {createControl} from '../../form/formFramework';
import Input from '../../components/UI/Input/Input';

function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: 'Значение не может быть пустым',
    id: number,
  }, {required: true}) 
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Вопрос не может быть пустым'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

export class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls:  createFormControls(),
  }

  onSubmitHandler = event => {
    event.preventDefault();
  }

  addQuestionHandler = () => {

  }

  addQuizHandler = () => {

  }

  onChangeHandler = (value, controlName) => {

  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <React.Fragment key={ controlName + index}>
          <Input
            
            label = {control.label}
            value = {control.value} 
            valid = {control.valid}
            shouldValidate = {!!control.validation}
            touched = {control.touched}
            errorMessage = {control.errorMessage}
            onChange = {event => this.onChangeHandler(event.target.value, controlName)}
          />
          {index === 0 ? <hr /> : null}
        </React.Fragment>
      )
    })
  }

    render() {
        return (
          <div className={classes.QuizCreator}>
            <div>
              <h1>
                Создание теста
              </h1>

              <form onSubmit={this.onSubmitHandler}>

                { this.renderControls() }

                <select></select>
                <Button 
                  type='primary'
                  onClick={this.addQuestionHandler}
                >
                  Добавить вопрос
                </Button>

                <Button 
                  type='success'
                  onClick={this.addQuizHandler}
                >
                  Создать тест
                </Button>
                
              </form>
            </div>
          </div>
        );
    }
}

export default QuizCreator
