const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    title: {type: String, require: true},
    artist: {type: String, require: true},
    imgSrc: {type: String, require: true},
    src: {type: String, require: true}
})

const Music = mongoose.model('Music', musicSchema)

module.exports = Music