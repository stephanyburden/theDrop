const mongoose = require('mongoose');
require('dotenv').config();

// Get the address to the Mongo database
// const connectionString = 'mongodb://localhost:27017/bookdb'

// Fire off the connection to the Mongo database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  });
  
  // Listen for when we connect,
  // and when connected call the callback function
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port} 🥭`);
  });

// Export the below as the collections to the controller 
module.exports = {
    Booking: require('./Booking.js'),
    Photographer: require('./Photographer.js')
}
