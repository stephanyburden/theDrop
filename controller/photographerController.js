const express = require('express');
const db = require('../models/index.js');
const router = express.Router();

// Event Route (Goes to Event selection page)
router.get('/events', (req, res) => {
    res.render('./drop/dropEvent.ejs');
});


// Select Route (Goes to Select Photographer page)
router.get('/select/:specialty', (req, res) => {
    db.Photographer.find({specialities: req.params.specialty }, (err, listPhotographer) => {
        if (err) return console.log(err)
        console.log(listPhotographer)
        
        console.log(req.params.specialty)
        res.render('./drop/dropSelect.ejs', { 
            event: req.params.specialty,
            photographers: listPhotographer
        })
    })
});


// Photographer Info Route (Goes to Photographer Info page)
router.get('/info/:photographerName', (req, res) => {
    db.Photographer.findOne({ name: req.params.photographerName }, (err, onePhotographer) => {
        if (err) return console.log(err);
        console.log(onePhotographer);
        res.render('./drop/dropInfo.ejs', { thePhotographer: onePhotographer } );
    }) 
});


// Index Route (Goes to All Photographers page)
router.get('/all-photographers', (req, res) => {
    db.Photographer.find({},(err, allPhotographers) => {
        if (err) return console.log(err);
        res.render('./drop/dropIndex.ejs', {allPhotographers: allPhotographers});
    }) 

});









module.exports = router;