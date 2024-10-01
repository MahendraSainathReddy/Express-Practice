const express = require("express");

const app = express();

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

app.get("/health-checkup", function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username === "mahendra" && password === "9515"){
        res.status(200).json({
            msg: "user exists"
        })
    }
    else{
        res.status(403).json({
            msg: "user doesn't exist"
        })
    }
})

app.post("/", function(req,res){
    res.send(users[0]);
})

app.put("/", function(req,res){
    res.send(users[0]);
})

app.delete("/", function(req,res){
    res.send(users[0]);
})

app.listen(9515);