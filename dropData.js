const db = require('./models/index.js');

db.Photographer.deleteMany({}, (err) =>{
    if (err) return console.log(err)

    console.log("deleted all photographers")
})