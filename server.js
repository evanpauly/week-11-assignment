const express = require('express');
const fs = require('fs');
const db = require('./Develop/db/db.json')

const PORT = process.env.PORT || 3001;
const public = require('./Develop/public/')
const app = express();

app.get('/api/db', (req, res) => {
    res.json(db);
})



app.use('/', public);

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`);
});