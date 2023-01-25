const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Music = require('./models/music')
const cors = require('cors')
const db = mongoose.connection
const musicData = require('./utilities/musicData')
const musicController = require('./controllers/music')

// Environmental Varibles
const app = express()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3001

// Connecting to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true},
   () => console.log('MongoDB is connected playa') )

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo is disconnected playa'))


// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()) //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
app.use(cors())

// Routes
app.use('/music', musicController) // telling server.js to get the routes from controllers/music.js


// Seeding the db
app.get('/seed', async (req, res) => {
    await Music.deleteMany({})
    await Music.insertMany(musicData)
    res.send('done!')
  })

app.listen(PORT, () => {
    console.log('This message means nothing', PORT)
  })