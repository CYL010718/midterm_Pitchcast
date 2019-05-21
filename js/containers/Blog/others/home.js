import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "./home.css"
class Home extends Component{
    componentDidMount(){
        let head_element = document.getElementById('banner')
        head_element.style.opacity = '1';
    }
    
    render(){
        return(
            <section className="wrapper style3 container special"  style = {{width:"64.3em"}}>
                        <div className="row">
                            <div className="col-4 col-12-narrower">
                                <NavLink to = "/add" >
                                    <section style = {{color:"black",opacity:"0.5", height:"13em"}} className = "homeSections" >
                                        <span ><img src = {require("../../../images/newPlayer.png")} style = {{height:"5em", width:"4em"}}/></span>
                                        <header>
                                            <h3 >Add Players</h3>
                                        </header>
                                        <p> Got new pitchers in your team? Add him/her to the list!</p>
                                    </section>
                                </NavLink>
                            </div>
                            <div className="col-4 col-12-narrower">
                                <NavLink to = "list">
                                    <section style = {{color:"black",opacity:"0.5", height:"13em"} } className = "homeSections">
                                        <span><img src = {require("../../../images/pitcher.png")} style = {{height:"5em", width:"4em"}}/></span>
                                        <header>
                                            <h3>Player List</h3>
                                        </header>
                                        <p> Manage all players from here!</p>
                                    </section>
                                </NavLink>
                            </div>
                            <div className = "col-4 col-12-narrower">
                                <NavLink to = "game">
                                    <section style = {{color:"black",opacity:"0.5", height:"13em"}} className = "homeSections">
                                        <span><img src = {require("../../../images/game.png")} style = {{height:"5em", width:"5.65em"}}/></span>
                                        <header>
                                            <h3>Start Game</h3>
                                        </header>
                                        <p> Let's start recording the pitchers performance!</p>
                                    </section>
                                </NavLink>
                            </div>
                        </div>
                    
			</section>
        )
    }
}

export default Home