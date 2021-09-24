const express = require('express');
const db = require('../models/index.js');
const router = express.Router();


// New Route (Goes to Booking Form page)
router.get('/:photographerId/new', (req, res) => {
    db.Photographer.findById( req.params.photographerId, (err, onePhotographer) => {
        if (err) return console.log(err);
        console.log(onePhotographer);
        res.render('./main/mainNew.ejs', { thePhotographer: onePhotographer } );
    })  
});

// Show Route (Goes to Appt Info/Details page)
router.get('/:id', (req, res) => {
    db.Photographer.findOne( {name: req.params.photographerName}, (err, foundPhotographer) => {
        if (err) return console.log(err);
        console.log("Here i am -->", req.params.photographerName)
        
        res.render('./main/mainShow.ejs', { oneBooking: foundPhotographer })
    })
    // Grab the booking from the database by its ID 
    // then we will send that data into the EJS template

});

// Create Route //
router.post('/', (req, res) => {
    // Grabs the data that is coming in from the frontend(req.body)
    // Then it adds that data to the database 
    db.Booking.create(req.body, (err, createBooking) => {
        if (err) return console.log(err);
        
        console.log(req.body)
        console.log(createBooking)
        
        res.redirect('/booking/' + createBooking._id);
    });
})





module.exports = router;