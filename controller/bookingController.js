const express = require('express');
const db = require('../models/index.js');
const router = express.Router();


// Index Route (Goes to All Booking Appt List page)
router.get('/', (req, res) => {
    res.render('./main/mainIndex.ejs');
});

// New Route (Goes to Booking Form page)
router.get('/new', (req, res) => {
    db.Photographer.findOne({ name: req.params.photographerName }, (err, onePhotographer) => {
        if (err) return console.log(err);
        console.log(onePhotographer);
        res.render('./main/mainNew.ejs', { thePhotographer: onePhotographer } );
    })  
});

// Show Route (Goes to Appt Info/Details page)
router.get('/:id', (req, res) => {
    res.render('./main/mainShow.ejs');
});

// Create Route //
router.post('/', (req, res) => {
    db.Booking.create(req.body, (err, createBooking) => {
        if (err) return console.log(err);
        
        //console.log(req.body)
        
        res.redirect('/info/:');
    });
})




// Edit Route (Goes to Pulls Up Edit Form page)
router.get('/:BookId/edit', (req, res) => {
    db.Booking.findById(req.params.bookingId, (err, foundBooking) => {
        if (err) return console.log(err);

        res.render('./main/mainEdit.ejs', { oneBooking: foundBooking });
    })
})



// Update Route //
router.put('/:bookingId', (req, res) => {
    db.Booking.findByIdAndUpdate(req.params.bookingId, req.body, (err, updateBooking) => {
        if (err) return console.log(err);
        
        res.redirect('' + req.params.bookingId);
    })
})




// Delete Route //









module.exports = router;