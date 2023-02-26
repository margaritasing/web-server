const express = require('express');
const app = express();
const port = 8080

app.set('view engine', 'hbs');

//middleware
app.use( express.static('public') )

app.get('/', function(req, res){
    res.render('home');
})


app.get('/hola-mundo', function(req, res){
    res.send('probando hola mundo')
})

app.get('/generic', function(req, res){
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', function(req, res){
    res.sendFile(__dirname + '/public/elements.html')
})


app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/404.html')
})



app.listen(port, () => {
    console.log(`ejemplo  listening ah http://localhost:${port}`)
})