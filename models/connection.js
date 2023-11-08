const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://itiax:MUPkWKp5952TnzrT@cluster0.xsr1mow.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));

