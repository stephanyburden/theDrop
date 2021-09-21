const express = require('express');
const db = require('../models/index.js');
const router = express.Router();


// Index Route (Goes to All Booking Appt List page)
router.get('/', (req, res) => {
    res.render('./main/mainIndex.ejs');
});

// New Route (Goes to Booking Form page)
router.get('/new', (req, res) => {
    res.render('./main/mainNew.ejs');
});

// Show Route (Goes to Appt Info/Details page)
router.get('/:id', (req, res) => {
    res.render('./main/mainShow.ejs');
});

// Create Route //



// Edit Route (Goes to Pulls Up Edit Form page)
router.get('/:id/edit', (req, res) => {
    res.render('./main/mainEdit.ejs');
});


// Update Route //



// Delete Route //









module.exports = router;