const express = require("express"); 
const cors = require('cors');
const app = express(); 

const lessons = [
    { topic: 'math', location: 'Hendon', price: 100 },
    { topic: 'math', location: 'Colindale', price: 80 },
    { topic: 'math', location: 'Brent Cross', price: 90 },
    { topic: 'math', location: 'Golders Green', price: 120 }
  ];
  
  const user = {
    email: 'user@email.com',
    password: 'mypassword'
  };


app.use(cors());


app.get("/lessons", function(request, response){
    response.json(lessons);
});

app.get("/user", function(request, response){
    response.send(user)
}) 

app.use(function(request, response){
    response.status(404).send("Page not found!");
});

app.listen(3000);



