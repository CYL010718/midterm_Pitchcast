import React from "react";
import "./button.css"
import {NavLink} from "react-router-dom"

export default ({Id,left}) => {
    return(
        <div className = "strike_ball_button" id = {Id} style = {{left:left}}>

        </div>
    )
}