const express = require('express');
const db = require('../models/index.js');
const router = express.Router();

// Event Route (Goes to Event selection page)
router.get('/event', (req, res) => {
    res.render('./drop/dropEvent.ejs');
});


// Photographer Info Route (Goes to Photographer Info page)
router.get('/info', (req, res) => {
    res.render('./drop/dropInfo.ejs');
});


// Select Route (Goes to Select Photographer page)
router.get('/select', (req, res) => {
    res.render('./drop/dropSelect.ejs');
});












module.exports = router;