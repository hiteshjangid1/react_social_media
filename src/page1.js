import React from 'react'
import ReactDOM from 'react-dom'
import Login from './index.js'


class Page extends React.Component
{
        constructor(props){
                super(props)
                this.state={
                        email:"",
                        name:"",
                        password1:"",
                        password2:""
                }
        }

    onname=(event)=>{
        this.state.name=event.target.value
    }

    onemail = (event) => {
        this.state.email = event.target.value
    }

    onpas = (event) => {
        this.state.password1 = event.target.value
    }

    onpass = (event) => {
        this.state.password2 = event.target.value
    }

    subhand=(event)=>{
        event.preventDefault();
            if(this.state.password1==this.state.password2)
            {
            const details=<p> Name : {this.state.name}<br /> Email: {this.state.email} <br/> Password: {this.state.password1}<br/><b>Details Saved!</b></p>
                ReactDOM.render(details,document.getElementById('root'));
                Login.email1=this.state.email;
                Login.password1=this.state.password1;
                setTimeout(()=>{
                    ReactDOM.render(<Login email={this.state.email} password={this.state.password1} />, document.getElementById('root'))
                    ReactDOM.render("", document.getElementById('boot'))
                },3000)
            }
            else{
                ReactDOM.render(<h2>Password do not match</h2>,document.getElementById('boot'))
            }
    }

    render()  {
        return (
            <form  onSubmit={this.subhand}>
                <input type="text" placeholder="Name"  onChange={this.onname}/><br/> <br/>
                <input type="text" placeholder="Email" onChange={this.onemail}/><br /> <br />
                <input type="password" placeholder="Password" onChange={this.onpas}/><br /> <br />
                <input type="password" placeholder="Re-enter Password" onChange={this.onpass}/><br /> <br />
                <input type="Submit"/>
                </form>
        );
    }
}

export default Page;