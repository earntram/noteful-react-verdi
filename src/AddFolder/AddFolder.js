import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import './AddFolder.css';
import AppContext from '../AppContext';
import ValidationError from '../ValidationError/ValidationError';

export default class AddFolder extends Component {
  static contextType = AppContext;

  state = {
    name: '', nameValid: false, validateMsg: '',
    formValid: false
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:9090/folders', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: this.state.name})
    })
    .then(res => res.json())
    .then(folder => {
      this.props.history.push('/');
      this.context.addFolder(folder)
    })
    .catch(err => {
      this.context.addError(err.message)
    })
  }

  updateName = (name) => {
    this.setState({name}, () => this.validateName(name))
  }

  validateName = name => {
    let nameValid = true;
    let validateMsg;

    if (name === '') {
      nameValid = false;
      validateMsg = 'Name cannot be blank'
    }

    this.setState({nameValid, validateMsg}, this.validateForm)
  }

  validateForm = () => {
    this.setState({
      formValid: this.state.nameValid
    })
  }

  render() {
    return (
      <section className='AddFolder'>
        <h2>Create a folder</h2>
        <NotefulForm onSubmit={e => this.handleSubmit(e)}>
          <div className='field'>
            <label htmlFor='folder-name-input'>
              Name
              < ValidationError isValid={this.state.nameValid} message={this.state.validateMsg} />
            </label>
            <input 
              type='text' 
              id='folder-name-input'
              defaultValue=''
              onChange={e => this.updateName(e.target.value)}
            />
          </div>
          <div className='buttons'>
            <button type='submit' disabled={!this.state.formValid}>
              Add folder
            </button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}
