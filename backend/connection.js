const mongoose = require('mongoose');

const url = 'mongodb+srv://salman1011:salman@cluster0.irvi8h5.mongodb.net/mern11002023?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});

module.exports = mongoose;
