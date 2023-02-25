const express = require('express');
const app = express();
const port = 8080

app.get('/', function(req, res){
    res.send('Hola mundo')
})

app.get('/hola-mundo', function(req, res){
    res.send('probando hola mundo')
})

app.get('/*', function(req, res){
    res.send('404 | page not found')
})


app.listen(port, () => {
    console.log(`ejemplo  listening ah http://localhost:${port}`)
})