import React from 'react'
import ReactDOM from 'react-dom'
import Login from './index.js'
import './w3.css'
import hacker from './img/=.jpeg'
import spidy from './img/spidy.jpg'
import feed from './img/feed1.jpg'
import Page from './page1.js'

class News extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            commn:''
        };
    }

    changeit= (event) =>{
            this.setState({commn:event.target.value})
    }

    commentit= (event) =>{
        event.preventDefault()
        document.getElementById('cmnt').style.display="none"
        ReactDOM.render(<div className="w3-card-4 w3-margin-top w3-margin" style={{ width: "90%" }}>
            <h3>{this.props.name}</h3>
            <p>{this.state.commn}</p>
        </div>, document.getElementById('boot'))
    }

    render(){
        return(
            <div>
        <div className="w3-animate-opacity w3-bottombar">
                <div className="w3-card-4 w3-margin" style={{ width: "90%", marginLeft: "5%",boxSizing:"border-box"}}>
                    <div className=" w3-bar">
                    <img src={hacker} alt="image not found"  style={{float:"left"}} className="w3-bar-item"  style={{width:"100%"}}/>
                        <p className="w3-bar-item w3-margin-right">Hacking refers to activities that seek to compromise digital devices, such as computers, 
                        smartphones, tablets, and even entire networks. And while hacking might not always be for malicious purposes, nowadays
                        most references to hacking, and hackers, characterize it/them as unlawful activity by cybercriminals—motivated by financial
                        gain, protest, information gathering (spying), and even just for the “fun” of the challenge.</p>
                 </div>
            </div>
                <div className="w3-card-4 w3-margin" style={{ width: "90%", marginLeft: "5%", boxSizing:"border-box" }}>
                    <div className="w3-bar">
                    <img src={spidy} alt="image not found" className="w3-bar-item" style={{width:"100%"}}/>
                <p className="w3-bar-item w3-margin-right">No, we’re not talking of taking on big industry projects, but smaller real-world projects
                that can help you materialize your theoretical skills into practical experience.
                By working on real-world React projects, you can bridge the gap between being a React beginner and
                 becoming a professional developer.</p>
                 </div>
            </div>
                <div className="w3-card-4 w3-margin" style={{ width: "90%", marginLeft: "5%", boxSizing: "border-box" }}>
                    <div className=" w3-bar">
                        <img src={feed} alt="image not found" className="w3-bar-item"  style={{width:"100%"}}/>
                        <p className="w3-bar-item w3-margin-right">No, we’re not talking of taking on big industry projects, but smaller real-world projects
                        that can help you materialize your theoretical skills into practical experience.
                        By working on real-world React projects, you can bridge the gap between being a React beginner and
                 becoming a professional developer.</p>
                    </div>
                </div>
            </div>

                <div className="w3-card-4 w3-margin-top w3-margin" style={{ width: "90%" }}  id="cmnt">
                    <p>{this.state.commn}</p>
                </div>


            <div className="w3-margin-top w3-card ">
                <form>
                    <textarea  style={{ width: "90%", marginLeft: "2%", boxSizing: "border-box" }} className="w3-border-blue " rows="10" onChange={this.changeit}></textarea>
                    <button type="button" className="w3-button w3-block w3-center w3-black w3-hover-red w3-active-purple" style={{ width: "90%", marginLeft: "2%", boxSizing: "border-box" }} onClick={this.commentit}>Comment</button>
                </form>
            </div>
        
            </div>
        );
    }
}

export default News;