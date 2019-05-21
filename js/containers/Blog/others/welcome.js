import React, {Component} from "react"
import{NavLink} from "react-router-dom"
class Welcome extends Component{
    render(){
        return(
            <section className = "wrapper style3 container special"  style = {{width:"64.3em"}}>
                    <span>
                        <h1 id = 'welcome'> Welcome to Pitch Cast! </h1>
                        <br/>
                        <NavLink to = "/home" style = {{border:"0px"}}><button style = {{color:"black",opacity:"0.3", border:"solid 1px", padding:"0px"}}>Get Started!</button></NavLink>
                    </span>
            </section>
        )
    }
}

export default Welcome