const express = require('express')
const router = express.Router()
const Music = require('../models/music.js')
// Remember INDUCES

// Index
router.get('/', (req, res) => {
    Music.find({}, (err, foundMusic) => {
        res.json(foundMusic)
    })
})
// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res) => {
    Music.findByIdAndRemove(req.params.id, (err, deletedMusic) => {
        res.json(deletedMusic)
    })
})
// Update
router.put('/:id', (req, res) => {
    Music.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMusic) => {
        res.json(updatedMusic)
    })
})
// Create
router.post('/', (req, res) => {
    Music.create(req.body, (err, createdMusic) => {
        res.json(createdMusic) //.json() will send proper headers in response so client knows it's json coming back
    })
})
// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res) => {
    Music.findById(req.params.id, (err, foundMusic) => {
        res.json(foundMusic)
    })
})


module.exports = router