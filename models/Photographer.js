const mongoose = require('mongoose')

// -- The Schema -- // 
const photographerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    picture: { type: String },
    specialities: [] 
    
})


// -- The Model -- // 
const Photographer = mongoose.model('Photographer', photographerSchema)


module.exports = Photographer 


