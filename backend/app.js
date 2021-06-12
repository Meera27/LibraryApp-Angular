const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
const InitiateMongoServer = require("./db");
InitiateMongoServer();


const UserData = require('./src/model/userdata');
const BookData = require('./src/model/bookdata');
const AuthorData = require('./src/model/authordata');

var app = new express();
app.use(cors());
app.use(express.json());

username="admin"
password="1234";
 

function verifyToken(req,res,next){

  if(!req.headers.authorization)
  {
    return res.status(401).send('Unauthorized Request');
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token=='null')
  {
    return res.status(401).send("Unauthorised Request")
  }
  let payload = jwt.verify(token,'secretKey')
  // console.log(payload)
  if(!payload)
  {
    return res.status(401).send("Unauthorized Request")
  }
  req.userId= payload.subject;
  next();
}


app.post("/login",(req, res)=>{
    let userData = req.body;
    if(!username){
      res.status(401).send("Invalid Username")
  
    }else 
    if(password !== userData.password){

      res.status(401).send("Invalid Password")
    }
    else{
            let payload = {subject:username+password};
            let token = jwt.sign(payload,'secretKey');
            res.status(200).send({token});
     
    }
})

app.post('/newuser',function(req,res){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  console.log(req.body);
  var user = {
      fname : req.body.user.fname,
      lname : req.body.user.lname,
      number : req.body.user.number,
      email : req.body.user.email,
      password : req.body.user.password
  }
  var user = new UserData(user);
  user.save();
});


app.get("/books",verifyToken,function(req, res) {
    // res.send("hi");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
    BookData.find()
                .then(function(bookdata){
                    res.send(bookdata);
                });
    });


    app.post("/addbooks",verifyToken,function (req, res) {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
        console.log(req.body);
            var book = {
              title: req.body.book.title,
              genre: req.body.book.genre,
              author:req.body.book.author,
              image:req.body.book.image,
              desc: req.body.book.desc,        
            };
            
            var book = BookData(book);
            book.save();
            console.log(book);
          });

    app.get("/authors",verifyToken,function (req, res) {
        // res.send("hi");
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
        AuthorData.find()
                    .then(function(authordata){
                        res.send(authordata);
                   });
        });
        app.post("/addauthor",function (req, res) {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
        console.log(req.body);
            var author = {
              name: req.body.author.name,
              title: req.body.author.title,
              image:req.body.author.image,
              desc: req.body.author.desc,        
            };
            
            var author = AuthorData(author);
            author.save();
            console.log(author);
          });
    

          app.put('/editbook',verifyToken,(req,res)=>{
            console.log(req.body)
            id=req.body._id,
            title = req.body.title,
            genre = req.body.genre,
            author = req.body.author,
            image = req.body.image,
            desc = req.body.desc
            BookData.findByIdAndUpdate({"_id":id},
                                        {$set:{
                                        "title":title,
                                        "genre":genre,
                                        "author":author,
                                        "genre":genre,
                                        "image":image,
                                        "desc":desc}})
           .then(function(){
               res.send();
           })
        });

        app.delete('/deletebook/:id',function(req,res){
          const id = req.params.id;
          BookData.remove({_id: id})
          .then(function(){
              res.status(200).json({id});
          })
      });

      app.delete('/deleteauthor/:id', function(req,res){
        const id = req.params.id;
        AuthorData.remove({_id: id})
        .then(function(){
            res.status(200).json({id});
        })
    });
        app.put('/editauthor',(req,res)=>{
          console.log(req.body)
          id=req.body._id,
          name = req.body.name,
          title = req.body.title,
          image= req.body.image,
          desc=req.body.desc
          AuthorData.findByIdAndUpdate({"_id":id},
                                      {$set:{
                                        "name" : req.body.name,
                                        "title" : req.body.title,
                                        "image" : req.body.image,
                                        "desc":desc}})
         .then(function(){
             res.send();
         })
      });
      app.get('/book/:id', function(req, res){
        const id = req.params.id;
        BookData.findOne({"_id":id})
        .then((book)=>{
              res.send(book);
          });
      });
    
    app.get('/author/:id',function(req, res){
        const id = req.params.id;
        AuthorData.findOne({"_id":id})
        .then((author)=>{
              res.send(author);
          });
      });

app.listen(1514,function(){
    console.log("Listening to port 1514");
});