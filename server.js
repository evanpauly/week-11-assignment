const express = require('express');
const fs = require('fs');
const { db } = require('./Develop/db/db.json')

const app = express();

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});