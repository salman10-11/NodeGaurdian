const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const codeRouter = require('./routers/codeRouter');
const utilRouter = require('./routers/utils');
const cors = require('cors');

// to allow client to make request
app.use( cors({ origin: 'http://localhost:3000' }) )

app.use(express.json());

app.use('/user', userRouter);   
app.use('/code', codeRouter);   
app.use('/util', utilRouter);   


app.use(express.static('./archives'));
app.use(express.static('./static/uploads'));

app.get('/', (req, res) => {
    res.send('Working Fine');
});

app.get('/add', (req, res) => {
    res.send('Add Request on Server');
});

// home
// getall

app.listen( port, () => { console.log('server started') } );