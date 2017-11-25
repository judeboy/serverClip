const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan())
app.use(bodyParser.json())
app.disable('x-powered-by')

app.listen(port, function(){
  console.log(`listening on port ${port}`)
})
app.get('/ping', function (req,res,next){
  res.json({message: 'pong!'})
})

app.use(function(req,res,next){
  res.status(404).json({error: 404})
})
app.use(function(req,res,next){
  res.status(500).json({error: 500})
})
