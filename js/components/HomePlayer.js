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

        /* fetch(`/getimg/${this.props.Number}/${this.props.Name}`,{
            method: 'GET',
         }).then(res => res.json())
            // console.log(res.clone().json());)
         .then(data => {
             //PlayerData = data;
             this.updatePlayer(data)
            // console.log(data);
         })
         .catch((err) => console.log('Error :', err));*/
    }
    
    updatePlayer = (data) => {
       
       /* reader.onload = function(){
            var output = document.getElementById('imagePreview');
            output.src = reader.result;
          };
        reader.readAsDataURL(data.img.data);*/
        this.setState(state => ({
            PlayerData: data,
        }))
        //console.log(data.img)


     }
    render(){
        return(
            <section>
                <img src =  {require(`../images/player.jpg`)}/>
                <header>
                    <h3>
                        <NavLink to = {{
                            pathname: `players/${this.props.Number}/${this.props.Name}`,
                            data: this.state.PlayerData}}> #{this.props.Number} {this.props.Name}</NavLink>
                    </h3>
                </header>
            </section>
        )
    }
}

export default HomePlayer;