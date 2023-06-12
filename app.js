require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const signUp = require('./routes/signUpRoute')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errormessage) => console.log(errormessage))
db.once('open', ()=> console.log('connection established'))

app.get(('/'), (req,res)=>{
    res.send(`It is working`)
})


app.use('/api/v1/signup', signUp)
app.listen(PORT, console.log(`Server Started running at http://localhost:${PORT}`))