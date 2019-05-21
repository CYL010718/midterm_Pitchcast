import React, {Component} from "react";
import{NavLink} from "react-router-dom"
import BallButton from "../../../components/button"
const fetch = require('node-fetch');

let record = [];

let playingPitcherName = [];
let playingPitcherNum = [];


class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            playerName: 'default',
            playerNum: '',
            pitchCount:0,
            strikeCount:0,
            ballCount:0,
            strikes:0,
            balls:0,
            outs:0,
            strikeOut:0,
            hbp:0,
            walk:0,
            hit:0,
            run:0,
            outCount:0,
            ip:'0.0',
            ERA:'',
            CareerIP:'',
            CareerR:'',
            CareerHits: '',
            Result: ''
        }
    }
    changePlayerReset = () => {
        this.setState(state => ({
            pitchCount:0,
            strikeCount:0,
            ballCount:0,
            strikeOut:0,
            hbp:0,
            walk:0,
            hit:0,
            run:0,
            outCount:0,
            ip:'0.0',
        }))
    }
    reset = () => {
        this.setState(state => ({
            playerName: 'default',
            playerNum: '',
            pitchCount:0,
            strikeCount:0,
            ballCount:0,
            strikes:0,
            balls:0,
            outs:0,
            strikeOut:0,
            hbp:0,
            walk:0,
            hit:0,
            run:0,
            outCount:0,
            ip:'0.0',
            ERA:'',
            CareerIP:'',
            CareerR:'',
            CareerHits: '',
            Result: ''
        }))
        record = [];
        playingPitcherName = [];
        playingPitcherNum = [];
    }
    handleStrike = () =>{
        let newStrikeNum;
        let newBallNum = this.state.balls;
        let newStrikeOut = this.state.strikeOut;
        if(this.state.strikes < 2){
            newStrikeNum = this.state.strikes + 1;
            for(let i = 1; i<= newStrikeNum; i++){
                let element = document.getElementById(`strike_${i}`)
                element.style.background = "rgba(250,250,8,1)"
            }
        }
        else{
            newStrikeNum = 0;
            newBallNum = 0;
            newStrikeOut = newStrikeOut + 1;
            for(let i = 1; i<= 2; i++){
                let element = document.getElementById(`strike_${i}`)
                element.style.background = "#ddd"
            }
            for(let i = 1; i<= 3; i++){
                let element = document.getElementById(`ball_${i}`)
                element.style.background = "#ddd"
            }
            this.setState(state =>({
                pitchCount: state.pitchCount-1,
                strikeCount: state.strikeCount-1,
             
            }))
            this.handleOut();
        }
        this.setState(state =>({
            pitchCount: state.pitchCount+1,
            strikeCount: state.strikeCount+1,
            strikes: newStrikeNum,
            balls: newBallNum,
            strikeOut: newStrikeOut
        }))

    }

    handleBall = () =>{
        let newStrikeNum = this.state.strikes;
        let newBallNum;
        let newWalk = this.state.walk;
        let newCareerHits = this.state.CareerHits;
        if(this.state.balls < 3){
            newBallNum = this.state.balls + 1;
            
            for(let i = 1; i<= newBallNum; i++){
                let element = document.getElementById(`ball_${i}`)
                element.style.background = "rgba(8,250,50,0.9)"
            }
        }
        else{
            newBallNum = 0;
            newStrikeNum = 0;
            newWalk = newWalk+1;
            newCareerHits = newCareerHits+1;
            for(let i = 1; i<= 2; i++){
                let element = document.getElementById(`strike_${i}`)
                element.style.background = "#ddd"
            }
            for(let i = 1; i<= 3; i++){
                let element = document.getElementById(`ball_${i}`)
                element.style.background = "#ddd"
            }
        }
        this.setState(state =>({
            pitchCount: state.pitchCount+1,
            ballCount: state.ballCount+1,
            balls: newBallNum,
            strikes: newStrikeNum,
            walk:newWalk,
            CareerHits: newCareerHits
        }))
    }

    handleFoul = () =>{
        let newStrikeNum = this.state.strikes;
        if(this.state.strikes < 2){
            newStrikeNum = newStrikeNum + 1;
            for(let i = 1; i<= newStrikeNum; i++){
                let element = document.getElementById(`strike_${i}`)
                element.style.background = "rgba(250,250,8,1)"
            }
        }
        this.setState(state =>({
            pitchCount: state.pitchCount+1,
            strikeCount: state.strikeCount+1,
            strikes:newStrikeNum
        }))
    }

    handleHBP = () => {
        for(let i = 1; i<= 2; i++){
            let element = document.getElementById(`strike_${i}`)
            element.style.background = "#ddd"
        }
        for(let i = 1; i<= 3; i++){
            let element = document.getElementById(`ball_${i}`)
            element.style.background = "#ddd"
        }
        this.setState(state => ({
            hbp: state.hbp + 1,
            CareerHits:state.CareerHits + 1,
            ballCount: state.ballCount + 1,
            pitchCount:state.pitchCount+1,
            strikes:0,
            balls:0
        }))
    }

    handleHit = () => {
        for(let i = 1; i<= 2; i++){
            let element = document.getElementById(`strike_${i}`)
            element.style.background = "#ddd"
        }
        for(let i = 1; i<= 3; i++){
            let element = document.getElementById(`ball_${i}`)
            element.style.background = "#ddd"
        }
        this.setState(state => ({
            hit:state.hit+1,
            CareerHits:state.CareerHits + 1,
            strikes:0,
            strikeCount: state.strikeCount+1,
            pitchCount:state.pitchCount+1,
            balls:0
        }))
    }
    handleOut = () => {
        let newOut;
        const newOutCount = this.state.outCount + 1;
        const ipInt = Math.floor(newOutCount / 3);
        const ipDecimal = newOutCount % 3;
        const newIP = ipInt.toString() + '.' + ipDecimal.toString();

        if(this.state.outs < 2){
            newOut = this.state.outs + 1;
            
            for(let i = 1; i<= newOut; i++){
                let element = document.getElementById(`out_${i}`)
                element.style.background = "rgba(250,8,8,1)"
            }
        }
        else{
            newOut = 0;
          
            for(let i = 1; i<= 2; i++){
                let element = document.getElementById(`out_${i}`)
                element.style.background = "#ddd"
            }

        }
        for(let i = 1; i<= 2; i++){
            let element = document.getElementById(`strike_${i}`)
            element.style.background = "#ddd"
        }
        for(let i = 1; i<= 3; i++){
            let element = document.getElementById(`ball_${i}`)
            element.style.background = "#ddd"
        }
        this.setState(state =>({
            strikes:0,
            balls:0,
            strikeCount: state.strikeCount+1,
            pitchCount:state.pitchCount+1,
            outs: newOut,
            outCount: newOutCount,
            ip: newIP,
            ERA: Math.round((state.CareerR)/((state.CareerIP+(1/3))/9)*100)/100,
            CareerIP: state.CareerIP+(1/3)
        }))
        
    }
    handleRun = () => {
        if(this.state.CareerIP === 0){
            this.setState(state => ({
                run:state.run+1,
                CareerR: state.CareerR+1
            }))
        }
        else{
            console.log(this.state.CareerIP);
            this.setState(state => ({
                run:state.run+1,
                ERA: Math.round((state.CareerR+1)/((state.CareerIP)/9)*100)/100,
                CareerR: state.CareerR+1

            }))
        }
    }

    handleBase = event => {
        let Id = parseInt(event.target.id);
        if(Id%2 === 1){
            event.target.style.backgroundColor = "rgba(255,255,0,1)";
            Id += 1;
        }
        else{
            event.target.style.backgroundColor = "white";
            Id -= 1;
        }
        event.target.id = Id.toString();
        
    }
    handleChange = () => {
        let element = document.getElementById('pitcherList');
        element.style.display = 'block';
        let sec_element = document.getElementById('opacity_sec');
        let head_element = document.getElementById('banner')
        head_element.style.opacity = '0.3';
        sec_element.style.opacity = '0.3';
    }
    handleChoosePlayer = event => {
        let element = document.getElementById('pitcherList');
        element.style.display = 'none';
        let sec_element = document.getElementById('opacity_sec');
        let head_element = document.getElementById('banner')
        head_element.style.opacity = '1';
        sec_element.style.opacity = '1';
        
        const name = event.target.name;
        const number = event.target.id;
        event.target.style.display = 'none';
        playingPitcherName.push(name);
        playingPitcherNum.push(number);
        if(this.state.playerName !== 'default'){
            record.push([this.state.playerName, this.state.ip, this.state.hit, this.state.run, this.state.walk, this.state.strikeOut,this.state.pitchCount, this.state.strikeCount, this.state.ballCount, this.state.hbp, this.state.ERA]);
        }

        let gameIP = parseInt(this.state.ip) + (parseFloat(this.state.ip)-parseInt(this.state.ip))*10*(1/3);
        const CareerWHIP = Math.round(this.state.CareerHits / this.state.CareerIP *100)/100;
        const gameWHIP = Math.round((this.state.hit+this.state.walk+this.state.hbp) /  gameIP *100)/100;
        const gameERA = Math.round(this.state.run / (gameIP/9) *100)/100;

        let CareerIPInt = Math.floor(parseInt(this.state.CareerIP));
        let CareerIPDecimal = Math.round((this.state.CareerIP - CareerIPInt)/(1/3));
        if(CareerIPDecimal === 3) {
            CareerIPInt += 1;
            CareerIPDecimal = 0;
        }
        const CareerIP = CareerIPInt.toString()+'.'+CareerIPDecimal.toString();
        fetch('/updateData',{
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.playerName,
                number: this.state.playerNum,
                CareerERA: this.state.ERA,
                CareerIP: CareerIP,
                CareerWHIP: CareerWHIP,
                gameERA: gameERA,
                gameIP: this.state.ip,
                gameWHIP: gameWHIP,
                SO: this.state.strikeOut,
                BB: this.state.walk
            })
        })

        this.setState(state => ({
            playerName: name,
            playerNum:number
        })) 
        this.changePlayerReset();
        
        fetch(`/getPlayer/${number}/${name}`,{
            method: 'GET',
        }).then(res => res.json())
        .then(data => {
           // let IP = parseInt(data.Career.IP);//IP = 3.1
            let IP = Math.floor(parseInt(data.Career.IP)) + (parseInt(data.Career.IP)-Math.floor(parseInt(data.Career.IP)))*10*(1/3);// IP =3.333
            this.setState(state => ({
                ERA: data.Career.ERA,
                CareerIP: IP,
                CareerR: Math.round((IP/9)*data.Career.ERA),
                CareerHits: Math.round(IP*data.Career.WHIP)
            }))
            if(data.Career.ERA === '--'){
                this.setState(state => ({
                    CareerR: 0
                }))
            }
            if(data.Career.WHIP === '--'){
                this.setState(state =>({
                    CareerHits: 0
                }))
            }
        })
        .catch((err) => console.log('Error :', err));
    

    }
    handleReturn = () => {
        let element = document.getElementById('pitcherList');
        element.style.display = 'none';
        let sec_element = document.getElementById('opacity_sec');
        let head_element = document.getElementById('banner')
        head_element.style.opacity = '1';
        sec_element.style.opacity = '1';
    }
    closeGame = () => {
        
        const element = document.getElementById('W/L')
        element.style.display = 'block'
        let sec_element = document.getElementById('opacity_sec');
        let head_element = document.getElementById('banner')
        head_element.style.opacity = '0.3';
        sec_element.style.opacity = '0.3';

        let gameIP = parseInt(this.state.ip) + (parseFloat(this.state.ip)-parseInt(this.state.ip))*10*(1/3);
        const CareerWHIP = Math.round(this.state.CareerHits / this.state.CareerIP *100)/100;
        const gameWHIP = Math.round((this.state.hit+this.state.walk+this.state.hbp) /  gameIP *100)/100;
        const gameERA = Math.round(this.state.run / (gameIP/9) *100)/100;

        let CareerIPInt = Math.floor(parseInt(this.state.CareerIP));
        let CareerIPDecimal = Math.round((this.state.CareerIP - CareerIPInt)/(1/3));
        if(CareerIPDecimal === 3) {
            CareerIPInt += 1;
            CareerIPDecimal = 0;
        }
        const CareerIP = CareerIPInt.toString()+'.'+CareerIPDecimal.toString();
        fetch('/updateData',{
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.playerName,
                number: this.state.playerNum,
                CareerERA: this.state.ERA,
                CareerIP: CareerIP,
                CareerWHIP: CareerWHIP,
                gameERA: gameERA,
                gameIP: this.state.ip,
                gameWHIP: gameWHIP,
                SO: this.state.strikeOut,
                BB: this.state.walk
            })
        })
        
    }
    handleResult = e => {
        let result = e.target.id;
        this.setState(state => ({
            Result: result
        }))
        e.target.style.display = 'none';
        const element = document.getElementById("WP/LP");
        element.style.display = 'block';
    }
    handlePlayerResult = e => {
        let name = e.target.name;
        let number = e.target.id;
        fetch('/updateWL',{
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                number: number,
                result: this.state.Result
            })
        })
        .catch((err) => console.log('Error :', err));
        this.reset();
    }
    componentDidMount(){
        let element = document.getElementById('pitcherList');
        element.style.display = 'block';
        let sec_element = document.getElementById('opacity_sec');
        let head_element = document.getElementById('banner')
        head_element.style.opacity = '0.3';
        sec_element.style.opacity = '0.3';
    }
    render(){
        const choosePlayer = this.props.name.map ( (i,index) => (
            <button  key = {index} style = {{border:'none',fontWeight:'200'}} onClick = {this.handleChoosePlayer} name = {i} id = {this.props.number[index]}> #{this.props.number[index]} {i} </button>
        ))
        let gamePlayer = playingPitcherName.map((i,index) => (
            <NavLink to = "/home" style = {{border:"0px"}} key = {index}>
                <button  style = {{border:'none',fontWeight:'200'}} onClick = {this.handlePlayerResult} name = {i} id = {playingPitcherNum[index]}> #{playingPitcherNum[index]} {i} </button>
            </NavLink>   
        ))
        let pastRecord = record.map((i,index) => (
            <tr key = {index}>
                <th align = "left" style = {{paddingLeft:"1em"}}>{i[0]}</th>
                <td>{i[1]}</td>
                <td>{i[2]}</td>
                <td>{i[3]}</td>
                <td>{i[4]}</td>
                <td>{i[5]}</td>
                <td>{i[6]}</td>
                <td>{i[7]}</td>
                <td>{i[8]}</td>
                <td>{i[9]}</td>
                <td>{i[10]}</td>
            </tr>     
        ))
        return(
            <div>
                <div id = "W/L" align = 'center'   style = {{display:'none',width:'30%', height:'50%', backgroundColor:'white', position:"fixed" ,top: '30%',left: '35%', border:"3px solid rgba(0,0,0,0.4)", borderRadius:'1em', zIndex:'9', overflow:'scroll'}}>
                         <h1 style = {{fontWeight:'500', fontSize:'1.3em'}}>Choose game result</h1>
                         <button  id = 'W' style = {{border: 'none', fontWeight:'200'}} onClick = {this.handleResult}>Win</button>
                         <button  id = 'L' style = {{border: 'none', fontWeight:'200'}} onClick = {this.handleResult}>Lose</button>
                         
                </div>
                <div id = "WP/LP" align = 'center'   style = {{display:'none',width:'30%', height:'50%', backgroundColor:'white', position:"fixed" ,top: '30%',left: '35%', border:"3px solid rgba(0,0,0,0.4)", borderRadius:'1em', zIndex:'9', overflow:'scroll'}}>
                        {gamePlayer}
                </div>
                <div id = "pitcherList" align = 'center'   style = {{width:'30%', height:'50%', backgroundColor:'white', position:"fixed" ,top: '30%',left: '35%', border:"3px solid rgba(0,0,0,0.4)", borderRadius:'1em', zIndex:'5', overflow:'scroll'}}>
                         <h1 style = {{fontWeight:'500', fontSize:'1.3em'}}>Choose a player</h1>
                         {choosePlayer}
                         <button  style = {{border:'none',fontWeight:'400'}} onClick = {this.handleReturn} > Close </button>   
                </div>
                <section id = "opacity_sec" className="wrapper style3 container special" style = {{width:"64.3em", opacity:"0.3"}}>
                 
                    <div>
                        <h1 style = {{fontSize:"1.3em"}}>
                            On field situation manager
                        </h1>
                    </div>
                    <div className = "row" style = {{marginTop: '1em'}}>
                        <div className = "col-6 col-12-narrower">
                            <img src = {require(`../../../images/park1.png`)} style = {{width: "20em", height: "20em"}}/>

                            <div style = {{position:'relative', left:'16.54em', top:'-9.4em', width:'0.6em',height:'0.6em', transform:'rotate(45deg)',backgroundColor:'white'}} onClick = {this.handleBase} id = "1"></div>
                            <div style = {{position:'relative', left:'12.74em', top:'-13.8em', width:'0.6em',height:'0.6em', transform:'rotate(45deg)',backgroundColor:'white'}} onClick = {this.handleBase} id = "3"></div>
                            <div style = {{position:'relative', left:'9.13em', top:'-10.52em', width:'0.6em',height:'0.6em', transform:'rotate(45deg)',backgroundColor:'white'}} onClick = {this.handleBase} id = "5"> </div>
                        </div>
                        <div className = "col-6 col-12-narrower" style = {{position:"relative", left:"1em",  display:"flex", flexDirection:"column", justifyContent:"center"}} >
                            <div style = {{display:"flex"}}>
                                <p>Ball:</p>
                                <BallButton Id = "ball_1" left = "0.94em"/>
                                <BallButton Id = "ball_2" left = "0.94em"/>
                                <BallButton Id = "ball_3" left = "0.94em"/>
                            </div>
                            <div style = {{display:"flex"}}>
                                <p>Strike:</p>
                                <BallButton Id = "strike_1"/>
                                <BallButton Id = "strike_2"/>
                            </div>
                            <div style = {{display:"flex"}}>
                                <p>Outs:</p>
                                <BallButton Id = "out_1" left = "0.4em"/>
                                <BallButton Id = "out_2" left = "0.4em"/>
                            </div>
                            <div style = {{display:"flex"}}>
                                <p>Pitch Count: {this.state.pitchCount}</p>
                                <p style = {{position:"relative", left:"1em"}}>Strike: {this.state.strikeCount}</p>
                                <p style = {{position:"relative", left:"2em"}}>Ball: {this.state.ballCount}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 style = {{fontSize:"1.3em"}}>
                            choose pitch result
                        </h1>
                    </div>
                    
                    <div style = {{display:"flex", justifyContent:"center"}}>
                        <div style = {{display:"relative"}}>
                            <button style = {{margin:"1em", borderRadius:"1em"}} onClick = {this.handleStrike}> Strike </button>
                            <button style = {{margin:"1em", borderRadius:"1em"}} onClick = {this.handleBall}> Ball </button>
                            <button style = {{margin:"1em", borderRadius:"1em"}} onClick = {this.handleFoul}> Foul </button>
                            <button style = {{margin:"1em", borderRadius:"1em"}} onClick = {this.handleHBP}> HBP </button>
                        </div>  
                    </div>
                    <div>
                        <h1 style = {{marginTop:"2em", fontSize:"1.3em"}}>
                            choose play result
                        </h1>
                    </div>
              
                    <div style = {{display:"flex", justifyContent:"center", zIndex:'1'}}>
                        <div style = {{display:"relative"}}>
                            <button style = {{margin:"1em", borderRadius:"1em"}} onClick = {this.handleHit}> Hit </button>
                            <button style = {{margin:"1em", borderRadius:"1em"}} onClick = {this.handleOut}> Out </button>
                            <button style = {{margin:"1em", borderRadius:"1em"}} onClick = {this.handleRun}> Run(s) scored </button>
                        </div>
                       
                    </div>
                    <div>
                        <h1 style = {{marginTop:"2em", fontSize:"1.3em"}}>
                            game result
                        </h1>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr style = {{ backgroundColor: "rgba(100, 8, 125, 0.6)", color:"white", fontWeight:"500"}}>
                                    
                                    <th align = "left" style = {{paddingLeft:"1em"}}>Pitcher Name</th>
                                    <th>IP</th>
                                    <th>H</th>
                                    <th>R</th>
                                    <th>BB</th>
                                    <th>SO</th>
                                    <th>PC</th>
                                    <th>S</th>
                                    <th>B</th>
                                    <th>HBP</th>
                                    <th>ERA</th>
                                </tr>
                                {pastRecord}
                                <tr>
                                    <th align = "left" style = {{paddingLeft:"1em"}}>{this.state.playerName}</th>
                                    <td>{this.state.ip}</td>
                                    <td>{this.state.hit}</td>
                                    <td>{this.state.run}</td>
                                    <td>{this.state.walk}</td>
                                    <td>{this.state.strikeOut}</td>
                                    <td>{this.state.pitchCount}</td>
                                    <td>{this.state.strikeCount}</td>
                                    <td>{this.state.ballCount}</td>
                                    <td>{this.state.hbp}</td>
                                    <td>{this.state.ERA}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style = {{margin:"1em"}}>
                        <button style = {{margin:"1em", borderRadius:"1em"}} onClick = {this.handleChange}> Pitching Change </button>
                       
                    </div>
                </section>
                
                
                <section className="wrapper style1 container special">
                     <button style = {{color:"black",opacity:"0.3", border:"solid 0.1em"}} onClick = {this.closeGame}> Close Game </button> 
                </section>
            </div>
        )
    }
}

export default Game