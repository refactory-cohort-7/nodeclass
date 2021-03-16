const express = require('express');
//const bodyParser= require('body-parser') 
const app = express();
app.use(express.urlencoded({extended: true}))
// in the new version, bodyParser is incorparated in the express new version

app.set('view engine', 'pug');
app.set('views', './views');

// user visits browser at http://localhost:3000
// - browser conducts READ operation by sending a GET request to the server
// - the server receives the GET request and handles it using the express get() method
// - this express get() method has two arguments, app.get(path/endpoint, callback)
// the first arg = path/endpoint: appears after the domain name ('/')
// the second arg: = a call back has 2 args also (req,res), it uses the res object
// to send a response back to the browser.It does this by using the send() method (res.send)
// For callbacks: we are using ES6 arrow functions instead of the older way of writing functions

app.get('/', (req,res) => {
    res.send('Homepage! Hello world.')
});

app.get('/about', (req,res) =>{
    res.send('About page. Nice.');
});

app.get('/app', (req,res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => { 
    console.log(req.body)
    res.send('Data Successfully Captured')
  })

app.get('/hello', (req, res) => {
    res.render('index');
  });

//Path parameters
app.get('/users/:name', (req,res) => {
    res.send('Hello '+ req.params.name)
})

//query parameter http://localhost:3000/users?class=node&cohort=7
app.get('/users', (req,res) => {
    res.send('Welcome to node '+ req.query.class + req.query.cohort)
})

// Handling none existing routes
app.get('*', (req,res) =>{
    res.send('This page does not exist')
})

app.listen(3000, () => console.log('listening on port 3000'));