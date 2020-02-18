import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className='form__login'>
        <input type="text" name=""/>
        <input type="password" name="" id=""/>
        <button>Submit</button>
        <button>Cancel</button>
      </form>
    )
  }
}

export default LoginForm