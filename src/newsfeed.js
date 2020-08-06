import React from 'react'
import ReactDOM from 'react-dom'
import Login from './index.js'
import './w3.css'
import hacker from './img/=.jpeg'
import spidy from './img/spidy.jpg'
import feed from './img/feed1.jpg'

class News extends React.Component{
   

    render(){
        return(
        <div className="w3-animate-opacity">
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
            </div>);
    }
}

export default News;