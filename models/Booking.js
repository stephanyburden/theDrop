const mongoose = require('mongoose');



// -- The Schema -- // 
const bookingSchema = new mongoose.Schema({
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    visionSummary: { type: String },
    photographer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photographer'
    } 
})


// -- The Model -- // 
const Booking = mongoose.model('Booking', bookingSchema)


module.exports = Booking