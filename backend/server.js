require('dotenv').config()

const express = require('express') 
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dailyGoalsRoutes = require('./routes/daily_goals.js')

// middlewares
app.use(cors()) // enable cors for all routes

app.use(express.json()) // the payload from the req will be passed as JSON to the req.body

app.use('/api/daily',dailyGoalsRoutes) // handel daily goals routes

app.use(express.static('public')) // serving the public folder to the client
app.get('*', (req, res) => { // catch all routes handler
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// connection to DB
mongoose.connect(process.env.MONG_URI)
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`Connected to DB & listening on port ${process.env.PORT}`)
  })
})
.catch(err=>{console.log('err:', err)})

