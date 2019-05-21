import React, { Component } from "react";
import {NavLink} from "react-router-dom"
import "./addPlayer.css"

var FormData = require('form-data');
class addPlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: ''
        }
    }
    handleconfirm = event => {
            let name = document.getElementById("name_input").value;
            let number = document.getElementById("number_input").value;
            //console.log(form);
            fetch('/input',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    number: number,
                })

            }).then(res => {
              // console.log(res);
               return res.text();
            })
            .then(text => {
                console.log(text)
                if(text === 'success'){
                    this.setState(state => ({
                        status: 'Player Created!'
                    }))
                   this.props.handleGetList();
                }
                else if(text === 'fail'){
                    this.setState(state => ({
                        status: 'Failed! You must enter a name and a number!'
                    }))
                }
                else if(text === 'numberUsed'){
                    this.setState(state => ({
                        status: ' Number already used! Pick a new number'
                    }))
                }
            })

    }
 
    render(){
        
        
        return(
            <div>
                <section className = "wrapper style3 container special"  style = {{width:"64.3em"}}>
                    <h1 className = "title"> Create New Player</h1>
                    <span>
                        <span >
                            <h4 className = "input_title">
                                Enter Player Name: 
                                <input placeholder = "Name" id = "name_input"/>
                            </h4> 
                            
                        </span>
                        
                        <span>
                            <h4 className = "input_title">
                                Enter Player Number: 
                                <input placeholder = "Number" id = "number_input"/>
                            </h4>
                            
                        </span>
                        <button  className = "confirm" onClick = {this.handleconfirm}>Confirm</button>
                        
                        <span><h3>{this.state.status}</h3></span>
                    </span>
                
                    
                </section>
                <section className="wrapper style1 container special">
                        <NavLink to = "/home" style = {{border:"0px"}}><button style = {{color:"black",opacity:"0.3", border:"solid 1px", padding:"0px"}}> Home </button></NavLink>
                </section>
               
            </div>
           
             
        );
    }
    
}

export default addPlayer;