import React, { Component } from "react";
import "./HomePlayer.css";
import {NavLink} from "react-router-dom"
const Filereader = require('filereader')
const reader = new Filereader();
//export default ({Name, Number}) => {
class HomePlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            refresh: 0,
            PlayerData:'',
        }
    }
    componentWillMount(){
        fetch(`/getPlayer/${this.props.Number}/${this.props.Name}`,{
            method: 'GET',
         }).then(res => res.json())
            // console.log(res.clone().json());)
         .then(data => {
             //PlayerData = data;
             this.updatePlayer(data)
            // console.log(data);
         })
         .catch((err) => console.log('Error :', err));

    }
    
    updatePlayer = (data) => {
       
       
        this.setState(state => ({
            PlayerData: data,
        }))


     }
    render(){
        return(
            <div style = {{margin:'5em',borderTop:'0.1em solid', borderBottom: '0.1em solid',borderColor:'rgba(0,0,0,0.1)'}}> 
                <NavLink to = {{pathname: `players/${this.props.Number}/${this.props.Name}`,
                                data: this.state.PlayerData}} style = {{border:"0px"}}>
                    <img src =  {require(`../images/pitcher${this.props.Img}.png`)} style = {{width:'20em',height: '23em',opacity:'0.5'}}/>
                    <header>
                        <h3 style = {{color:'black',opacity:'0.5', border: '0px'}}>
                            #{this.props.Number} {this.props.Name}
                        </h3>
                    </header>
                </NavLink>
            </div>
        )
    }
}

export default HomePlayer;