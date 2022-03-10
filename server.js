const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();

app.use(express.json());

const fs = require('fs');
const db = require('./Develop/db/db.json')

const PORT = process.env.PORT || 3001;
const public = require('./Develop/public/')


app.get('/api/db', (req, res) => {
    res.json(db);
})

app.get()

app.use('/', public);

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`);
});