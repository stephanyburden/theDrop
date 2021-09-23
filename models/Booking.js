const mongoose = require('mongoose');



// -- The Schema -- // 
const bookingSchema = new mongoose.Schema({
    name: { type: String },
    phone: { type: String },
    Email: { type: String },
    visionSummary: { type: String } 
})


// -- The Model -- // 
const Booking = mongoose.model('Booking', bookingSchema)


module.exports = Booking