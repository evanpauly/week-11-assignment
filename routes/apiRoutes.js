const router = require('express').Router();
const data = require('../db/db.json')
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    res.json(data)
});

router.post('/api/notes', (req, res) => {
    data.push(req.body)
    fs.writeFile('./db/db.json', JSON.stringify(data), err => {
        if (err) throw err;
    })
    res.send('Data Added')
});


module.exports = router