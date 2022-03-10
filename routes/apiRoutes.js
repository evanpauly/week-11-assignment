const router = require('express').Router();
const data = require('../db/db.json')
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    res.json(data)
});

router.post('/api/notes', (req, res) => {
    req.body.id = uuidv4();
    data.push(req.body)
    fs.writeFile('./db/db.json', JSON.stringify(data), err => {
        if (err) throw err;
    })
    res.send('Data Added')
});

module.exports = router