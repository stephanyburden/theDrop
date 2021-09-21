const mongoose = require('mongoose');

// Get the address to the Mongo database
const connectionString = 'mongodb://localhost:27017/bookdb'

// Fire off the connection to the Mongo database
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  });
  
  // Listen for when we connect,
  // and when connected call the callback function
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString} 🥭`);
  });

// Export the below as the collections to the controller 
module.exports = {
    Booking: require('./Booking.js'),
    Photographer: require('./Photographer.js')
}
