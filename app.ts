// https://blog.logrocket.com/build-rest-api-node-express-mysql/#rest-api-project-structure

var express = require('express')
var app = express()

app.get('/', function (req, res) {

  res.send('hello world')
})

// test data
var users = {
    1 : {
        "username": "username1",
        "name": "user1",
        "email": "user1@gmail.com", 
        "favoriteColor": "blue" 
    }, 
    2 : {
        "username": "username2",
        "name": "user2",
        "email": "user2@gmail.com",
        "favoriteColor" : "blue" 
    }, 
    3 : {
        "username": "username3",
        "name": "user3",
        "email": "user3@gmail.com",
        "favoriteColor" : "green" 
    }
}

function returnRandomUser(users) {
    var numOfUsers = Object.keys(users).length; 

    var min = Math.ceil(numOfUsers+1);
    var max = Math.floor(1);
    
    var randomNum = Math.floor(Math.random() * (max - min) + min);
    
    return randomNum 
}

function getUsersByColor(color, users) { 
    var numOfUsers = Object.keys(users).length;
    // var list = []
    //var ids:number[] = [];
    const ids: number[] = []; 
    for (let i = 1; i < numOfUsers; i++) {
        if (users[i].favoriteColor == color) {
            ids.push(i) 
        }
    }
    var ans:object[] = []; 

    ids.forEach(function(id) {
        ans.push(users[id])
    })
    return ans 
}

app.get('/users', function(req, res) {
    console.log("favorite color")
    let color = req.query.favoriteColor 
    res.send(getUsersByColor(color, users))  
})


app.get('/users', function (req, res) {
    res.send(users) 
})


// We want to return a user randomly
app.get('/users/random', function(req, res) {
    console.log("function 2")
    var num = returnRandomUser(users)
    var obj = users[num]
    console.log(users[num]); 
    res.send(obj)
})

// we want to return email of user[id]
app.get('/users/:id', function(req, res) {
    console.log("function 1")
    var obj = users[req.params.id]
    console.log(users[req.params.id]); 
    res.send(obj.email)
})

app.listen(3000)

//mysql https://expressjs.com/en/guide/database-integration.html#mysql 
// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'dbuser',
//   password: 's3kreee7',
//   database: 'my_db'
// })
