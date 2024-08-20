import express from 'express'
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:true }))

app.get('/', function(req,res){
  //res.send('Oi mundo!')
  res.render('tela1')
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

app.get('/:calc/:x/:y', function(req,res){
  let calc
  if(req.params.calc=="soma"){
    calc = parseFloat(req.params.x) + parseFloat(req.params.y)
  }
  if(req.params.calc=="subt"){
    calc = parseFloat(req.params.x) - parseFloat(req.params.y)
  }
  if(req.params.calc=="mult"){
    calc = parseFloat(req.params.x) * parseFloat(req.params.y)
  }
  if(req.params.calc=="divi"){
    calc = parseFloat(req.params.x) / parseFloat(req.params.y)
  }
  const mensagem = parseFloat(req.params.calc)
  res.send(mensagem);
  
})


app.listen(3000)