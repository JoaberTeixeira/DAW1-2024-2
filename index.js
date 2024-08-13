import express from 'express'
const app = express()

app.get('/', function(req,res){
  res.send('Oi mundo!')
})

app.get('/Joaber', function(req,res){
  res.send('Oi Joáber!')
})

app.listen(3000)