import React from 'react'
import ReactDOM from 'react-dom'
import Login from './index.js'
import './w3.css'
import user from './img/user.jpg'

class News extends React.Component{
   

    render(){
        return(
        <div>
                <div className="w3-card-4" style={{ width: "90%", marginLeft: "5%" ,padding:"3%"}}>
                <p>No, we’re not talking of taking on big industry projects, but smaller real-world projects 
                that can help you materialize your theoretical skills into practical experience. 
                By working on real-world React projects, you can bridge the gap between being a React beginner and
                 becoming a professional developer.</p>
            </div>
                <div className="w3-card-4 w3-bar" style={{ width: "90%", margin: "5%", padding: "3%"  }}>
                    <img src={user} alt="image not found" className="w3-bar-item"/>
                <p className="w3-bar-item">No, we’re not talking of taking on big industry projects, but smaller real-world projects
                that can help you materialize your theoretical skills into practical experience.
                By working on real-world React projects, you can bridge the gap between being a React beginner and
                 becoming a professional developer.</p>
            </div>
                <div className="w3-card-4" style={{ width: "90%", margin: "5%", padding: "3%"}}>
                <p>No, we’re not talking of taking on big industry projects, but smaller real-world projects
                that can help you materialize your theoretical skills into practical experience.
                By working on real-world React projects, you can bridge the gap between being a React beginner and
                 becoming a professional developer.</p>
            </div>
            </div>);
    }
}


export default News;