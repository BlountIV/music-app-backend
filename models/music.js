const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    title: String,
    artist: String,
    img_src: String,
    src: String
})

const Music = mongoose.model('Music', musicSchema)

module.exports = Music