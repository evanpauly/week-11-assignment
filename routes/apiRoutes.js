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

router.delete('/notes/:id', (req, res) => {
    const createdNote = notes;
    const idNotes = createdNote.filter(note => note.id != req.params.id);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(idNotes), null, 2);

    res.json(idNotes);
    notes = idNotes;
})

module.exports = router