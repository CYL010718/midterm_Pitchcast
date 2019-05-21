import React, { Component } from "react";
import { NavLink, Switch, Route} from "react-router-dom";
import "./Blog.css"
import AddPlayer from "./others/addPlayer"
import Playerlist from "./others/list"
import Players from "./others/players"
import home from "./others/home"
import welcome from "./others/welcome"
import Game from "./others/game"


let PlayerName = [];
let PlayerNumber = [];

const getListData = function(){
    fetch('/getList',{
        method: 'GET',
     }).then(res => res.json())
     .then(data => updateList(data))
     .catch((err) => console.log('Error :', err));
}


 const updateList = function(data) {
    for (let x = 0; x < data.length; x++) {
        PlayerName.push(data[x].name)
        PlayerNumber.push(data[x].number)
        
    }
 }

 getListData();

 

export default class Blog extends Component {
    constructor(props){
        super(props)
        this.state = {
            PlayerDataName:'',
            PlayerDataNumber: ''
        }
    }
    handleGetList = () => {
        PlayerName = [];
        PlayerNumber = [];
        getListData();
        //console.log('hi');
        //this.handleRenewOver();
    }
 
    render() {
        return (
            <div>
                <header id="header" className="alt">
                 
				</header>
				<section id="banner">
					<div className="inner">
                        <img id = "cardinals" src = {require("../../images/glove.png")}/>
					</div>
				</section>
                
                <Switch>
                    <Route exact path = "/" component = {welcome}/>
                    <Route path = "/home" component = {home}/>
                    <Route path = "/add" render = {() => <AddPlayer handleGetList = {this.handleGetList} />}/>
                    <Route path = "/list" render = {() => <Playerlist name = {PlayerName} number = {PlayerNumber} />}/>
                    <Route path = "/players/:number/:name" render = { props => <Players {...props} handleGetList = {this.handleGetList} /> }/>
                    <Route path = "/game" component = {() => <Game name = {PlayerName} number = {PlayerNumber}/>}/>
                    
                
                </Switch>
            </div>
        );
    }
}
