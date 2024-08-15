import express from 'express'
const app = express()

app.get('/', function(req,res){
  res.send('Oi mundo!')
})

app.get('/Joaber', function(req,res){
  res.send('Joáber!')
})

app.get('/:x', function(req,res){
  const mensagem = 'Oi '+req.params.x
  res.send(mensagem)
})

app.get('/:nome/:sobrenome', function(req,res){
  const mensagem = 'Oi '+req.params.nome + ' ' + req.params.sobrenome
  res.send(mensagem)
})

app.get('/soma/:x/:y', function(req,res){
  const soma = parseInt(req.params. x) + parseInt(req.params. y)
  res.send('A soma é '+soma)
})

app.listen(3000)