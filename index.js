import express from 'express'
const app = express()

app.get('/', function(req,res){
  res.send('Oi mundo!')
})

app.get('/Joaber', function(req,res){
  res.send('Oi Joáber!')
})

app.get('/:x', function(req,res){
  const mensagem = 'Oi '+req.params.x
  res.send(mensagem)
})

app.get('/:nome/:sobrenome', function(req,res){
  const mensagem = 'Oi '+req.params.nome + ' ' + req.params.sobrenome
  res.send(mensagem)
})

app.listen(3000)