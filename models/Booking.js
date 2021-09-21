const mongoose = require('mongoose');



// -- The Schema -- // 
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String },
    time: { type: String }
})


// -- The Model -- // 
const Booking = mongoose.model('Booking', bookingSchema)


module.exports = Booking