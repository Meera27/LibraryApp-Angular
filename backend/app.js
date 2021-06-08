const express = require('express');
const cors = require('cors');
const InitiateMongoServer = require("./db");
InitiateMongoServer();

const UserData = require('./src/model/userdata');
const BookData = require('./src/model/bookdata');
const AuthorData = require('./src/model/authordata');

var app = new express();


// var bodyparser = require('body-parser');


app.use(cors());
app.use(express.json());

app.get("/books", function (req, res) {
    // res.send("hi");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
    BookData.find()
                .then(function(bookdata){
                    res.send(bookdata);
                });
    });
    app.post("/addbooks",function (req, res) {
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

    app.get("/authors", function (req, res) {
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
    

app.listen(1514,function(){
    console.log("Listening to port 1514");
});
