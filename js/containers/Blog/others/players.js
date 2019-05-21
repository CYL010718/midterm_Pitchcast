import React, {Component} from "react";
import{NavLink} from "react-router-dom"



class players extends Component{
    constructor(props){
        super(props);
    }
   
    handleDelete = () => {
        fetch('/delete',{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.props.match.params.name,
                number: this.props.match.params.number
            })

        })
        this.props.handleGetList();
    }

    render(){
        const name = this.props.match.params.name;
        const number = this.props.match.params.number;
        
        const LastGame = 
        <tr>
            <th>Last Game</th>
            <td key = 'W'> {this.props.location.data.LastGame.W}</td>
            <td key = 'L'>{this.props.location.data.LastGame.L}</td>
            <td key = 'ERA'>{this.props.location.data.LastGame.ERA}</td>
            <td key = 'G'>{this.props.location.data.LastGame.G}</td>
            <td key = 'IP'>{this.props.location.data.LastGame.IP}</td>
            <td key = 'SO'>{this.props.location.data.LastGame.SO}</td>
            <td key = 'BB'>{this.props.location.data.LastGame.BB}</td>
            <td key = 'WHIP'>{this.props.location.data.LastGame.WHIP}</td>
        </tr>

        const ListCareer = 
        <tr>
            <th>Career</th>
            <td key = 'W'> {this.props.location.data.Career.W}</td>
            <td key = 'L'>{this.props.location.data.Career.L}</td>
            <td key = 'ERA'>{this.props.location.data.Career.ERA}</td>
            <td key = 'G'>{this.props.location.data.Career.G}</td>
            <td key = 'IP'>{this.props.location.data.Career.IP}</td>
            <td key = 'SO'>{this.props.location.data.Career.SO}</td>
            <td key = 'BB'>{this.props.location.data.Career.BB}</td>
            <td key = 'WHIP'>{this.props.location.data.Career.WHIP}</td>
        </tr>
           
        
  
        return(
            <div>
                <section className = "wrapper style3 container special"  style = {{width:"64.3em"}}>
                    <img style = {{width:'20em',height: '23em',opacity:'0.5'}} src = {require(`../../../images/pitcher${this.props.location.data.img}.png`)}/>
                    <header>
                        <h3>  
                            #{number} {name}
                        </h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>W</th>
                                    <th>L</th>
                                    <th>ERA</th>
                                    <th>G</th>
                                    <th>IP</th>
                                    <th>SO</th>
                                    <th>BB</th>
                                    <th>WHIP</th>
                                </tr>
                                {LastGame}
                                {ListCareer}
                               
                            </tbody>
                        

                        </table>
                    </header>
                     <NavLink to = "/home" style = {{border:"0px"}}> <button  style = {{color:"black",opacity:"0.5", border:"solid 1px"}} onClick = {this.handleDelete}> Delete Player </button></NavLink>
                </section>
                <section className="wrapper style1 container special">
                    <NavLink to = "/home" style = {{border:"0px"}}> <button style = {{color:"black",opacity:"0.3", border:"solid 1px"}}> Home </button> </NavLink>
                </section>
            </div>
            
               
        );
    }
}

export default players;