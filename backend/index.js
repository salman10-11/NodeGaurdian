const express = require('express');
const app = express();
const port = 5000;

app.get( '/', (req, res) => {
    res.send('Working Fine');
});

app.get('/add', (req, res) => {
    res.send('Add Request on Server');
});





app.listen( port, () => { console.log('server started')} );

