import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import './AddFolder.css'

export default class AddFolder extends Component {
  state = {
    name: '', nameValid: false, validateMsg: {}
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.name)
    const folder = {
      name: e.target[0].value
    }
    this.validateName(this.state.name)
  }

  validateName = name => {
    const validateMsg = {...this.state.validateMsg};
    let nameValid = true;

    if (name === '') {
      validateMsg.name = 'Name cannot be blank';
      nameValid = false;
    }
    this.setState({validateMsg, nameValid});
  }

  render() {
    return (
      <section className='AddFolder'>
        <h2>Create a folder</h2>
        <NotefulForm onSubmit={e => this.handleSubmit(e)}>
          <div className='field'>
            <label htmlFor='folder-name-input'>
              Name
            </label>
            <input 
              type='text' 
              id='folder-name-input' 
              value={this.state.name} 
              onChange={e => this.setState({name: e.target.value})}
            />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add folder
            </button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}
