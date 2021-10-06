// -- Required Modules -- //
require('dotenv').config();
const express = require('express');
//const methodOverride = require('method-methodOverride');
const rowdy = require('rowdy-logger');
const photographerController = require('./controller/photographerController');
const bookingController = require('./controller/bookingController');


// -- Configuration -- // 
const app = express();
const port = process.env.PORT || 4000;
const rowdyResults = rowdy.begin(app);
app.use(express.urlencoded({ extended: false }));



// -- Middleware -- // 
app.set('view engine', 'ejs');
app.use(express.static('public'))


// -- Controllers -- //
app.use('/photographer', photographerController);
app.use('/booking', bookingController);













// -- Routes -- // 
app.get('/', (req, res) => {
    res.render('index.ejs');
})














// -- Start the Server -- //
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}🌈`);
    rowdyResults.print()
});
