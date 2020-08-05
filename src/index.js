import React from 'react'
import ReactDOM from 'react-dom'
import Page from './page1.js'
import { render } from '@testing-library/react'


class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
          email1:this.props.email || "",
          password1:this.props.password || "",
          email: 'hiteshjangid579@gmail.com',
          password: '12345678'

        }
    }

onmail=(event)=>{
        this.state.email1=event.target.value;
}

onpass=(event)=>{
  this.state.password1=event.target.value;
}


onSubmit= (event) => {
        event.preventDefault()
    if((this.state.email1== this.state.email) && (this.state.password1==this.state.password))
  {
              ReactDOM.render(<h1>User Authenticated!</h1>,document.getElementById('root'))
    }
    else{
      ReactDOM.render(<h1>New User</h1>, document.getElementById('root'))
    }
          
}

signupPage= (event)=>{
  ReactDOM.render(<Page />,document.getElementById('root'))
}

render()
{
  return (
          <form onSubmit={this.onSubmit}>
            <input type='text' placeholder="Email" onChange={this.onmail}/><br /><br />
      <input type='password' placeholder="Password" onChange={this.onpass} /><br /> <br />
    
            <input type='Submit'  style={{marginRight: "10px"}} />
            <button onClick={this.signupPage}>New User</button>
              </form>
              
      );
}
}


ReactDOM.render(<Login />,document.getElementById('root'))


export default Login;
