const mongoose = require('mongoose');

// Replace DB_URL with your MongoDB URL
mongoose.connect(DB_URL)
  .then((result) => {
      console.info('Connected to MongoDB');
  }).catch((err) => {
      console.error('Error connecting to MongoDB', err);
  });

module.exports = mongoose;