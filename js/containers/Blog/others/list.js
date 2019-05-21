import React, { Component } from "react";
import Homeplayer from '../../../components/HomePlayer';
import {NavLink} from "react-router-dom"
import './list.css';


const fetch = require('node-fetch');


class List extends Component{
     constructor(props){
         super(props)
         this.state = {
             data:'',
             length:''
         }
    }

    componentWillMount(){
        fetch('/getList',{
            method: 'GET',
         }).then(res => res.json())
         .then(data => {
             this.setState(state => ({
                 data:data,
                 length: data.length
             }))
            })
         .catch((err) => console.log('Error :', err));
    }


   
   
    render(){
         let list = [];
         for (let i = 0; i < this.state.length; i++){
            list.push ( <Homeplayer Name = {this.state.data[i].name} Number = {this.state.data[i].number} Img = {this.state.data[i].img} key = {i}></Homeplayer>)
         }
         
         return(
            <div>
                
                <section className = "wrapper style3 container special"  style = {{width:"64.3em"}}>
                    {list}
                </section>
                <section className="wrapper style1 container special">
                    <NavLink to = "/home" style = {{border:"0px"}}> <button style = {{color:"black",opacity:"0.3", border:"solid 1px"}}> Home </button> </NavLink>
                </section>
            </div>
            
        )
     
    }
}

export default List;