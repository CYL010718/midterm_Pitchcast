const express = require("express")
const  app = express()
const fs = require('fs')
/*
app.get('/', (req, res) => 
    res.render('index')
);*/

const path = require('path');
const router = express.Router();



router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);

const bodyParser = require('body-parser')
const multer = require('multer')

//app.use(multer);
app.use(bodyParser.json());


app.use(express.static('public'))
const server = app.listen(3000,  () => console.log("Example app listening on port 3000!"));

const mongoose = require('mongoose')
const Info = require('./js/models/playerinfo')

const http = require('http')


// Connect to mongo
mongoose.connect('mongodb+srv://CYL:Jarrodsaltalamacchia1@cluster0-h4fj2.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})
let db = mongoose.connection

db.on('error', error => {
    console.log(error)
})
db.once('open', () => {

    console.log('MongoDB connected!')
   
    app.get('/getList',function(req,res){
        Info.find()
        .select('name number img')
        .exec((err, doc) => {
            if (err) throw err
            res.send(doc)
        })
    }) 
    app.post('/input',function(req,res){
        let name = req.body.name;
        let number = req.body.number;
        let img = Math.floor(Math.random()*4)
        //console.log(req.body.image)
        if (name === '' || number === ''){
            res.send('fail')
            //console.log('hi')
        }
        else{
            let query = Info.find({'number': number})
            query.exec((err,doc) => {
                if(err) {
                    throw err;
                }
                else if(!doc.length){
                
                    let playerinfo = new Info({name,number,img})
                    playerinfo.save(err => {
                        if (err) console.error(err)

                        res.send('success')
                    })
                }
                else{
                    //console.log(res);
                    res.send('numberUsed')
                }
            })
        }
    })  
    app.delete("/delete",function(req,res){
        Info.findOneAndDelete({
            'name':req.body.name,
            'number':req.body.number
        })
        .catch(err => console.log(err));
        //console.log('delete!')
    })

    app.get("/getPlayer/:number/:name",function(req,res){
       // console.log(req.params.name)
        Info.findOne({
            'name': req.params.name,
            'number': req.params.number
        })
        .select('Career LastGame img')
        .exec((err, doc) => {
            if (err) throw err
            res.send(doc)
            //console.log(doc);
        })
    })
 /*  app.get("/getimg/:number/:name",function(req,res){
        // console.log(req.params.name)
         Info.findOne({
             'name': req.params.name,
             'number': req.params.number
         })
         .select('img')
         .exec((err, doc) => {
             if (err) throw err
             res.send(doc)
             //console.log(doc);
         })
     })*/

    app.patch("/updateData",function(req,res){
       //console.log(req.body.name)
        Info.findOneAndUpdate(
            {
                'name': req.body.name,
                'number': req.body.number
            },
            {
                $set:{
                    'Career.ERA':req.body.CareerERA,
                    'Career.WHIP': req.body.CareerWHIP,
                    'Career.IP':req.body.CareerIP,
                   
                    'LastGame.ERA':req.body.gameERA,
                    'LastGame.WHIP':req.body.gameWHIP,
                    'LastGame.IP':req.body.gameIP,
                    'LastGame.SO':req.body.SO,
                    'LastGame.BB':req.body.BB,
                    'LastGame.G':1
                    
                },
                $inc:{
                    'Career.G':1,
                    'Career.SO':req.body.SO,
                    'Career.BB':req.body.BB
                    
                }
            },
            (err,doc) => {
                if(err){
                    console.log('err');
                }
               // console.log(doc)
            }
        )
    })
    app.patch("/updateWL",function(req,res){
         //console.log(req.body.result)

          if(req.body.result === 'W'){
              //console.log('hi')
            Info.findOneAndUpdate(
                {
                    'name': req.body.name,
                    'number': req.body.number
                },
                {
                    $set:{
                        'LastGame.W':1  
                    },
                    $inc:{
                        'Career.W':1, 
                       
                    }
                },
                {new:true},
                (err,doc) => {
                    if(err){
                        console.log('err');
                    }
                   // console.log(doc)
                }
            )
          }
          else{
            Info.findOneAndUpdate(
                {
                    'name': req.body.name,
                    'number': req.body.number
                },
                {
                    $set:{
                        'LastGame.L':1  
                    },
                    $inc:{
                        'Career.L':1,
                    }
                },
                (err,doc) => {
                    if(err){
                        console.log('err');
                    }
                   // console.log(doc)
                }
            )
          }
            
    })
})
            
    

