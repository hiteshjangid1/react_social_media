import React from 'react'
import ReactDOM from 'react-dom'
import Page from './page1.js'
import News from './newsfeed.js'
import './w3.css'
import user from './img/user.jpg'
import { render } from '@testing-library/react'


class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
          email1: "",
          password1:"",
          email: this.props.email || "hj",
          password: this.props.password || "1234"

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
             ReactDOM.render(<News />,document.getElementById('root'))
      ReactDOM.render("", document.getElementById('boot'))
    }
    else{
      ReactDOM.render(<h1>Please Sign up..New User</h1>, document.getElementById('boot'))
    }
          
}

signupPage= (event)=>{
  ReactDOM.render(<Page />,document.getElementById('root'))
  ReactDOM.render("", document.getElementById('boot'))
}

render()
{
  return (
    <div className="w3-card-4 w3-center" style={{margin:"auto",marginTop:"10%", width:"70%", padding:"2%"}}>
        <img src={user} alt="image not found" style={{width:"40%"}} />
          <form onSubmit={this.onSubmit}>
            <input type='text' placeholder="Email" onChange={this.onmail} required/><br /><br />
      <input type='password' placeholder="Password" onChange={this.onpass}required /><br /> <br />
    
            <input type='Submit'  style={{marginRight: "10px"}} />
            <button onClick={this.signupPage}>New User</button>
              </form>
              </div>
      );
}
}


ReactDOM.render(<Login />,document.getElementById('root'))


export default Login;
