const db = require('./models');
const data = require('./photographerData.json');

// Delete - Clear out the DB
db.Photographer.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  
  console.log(result.deletedCount,'photographers deleted');

  // Create - Add some games to the DB
  db.Photographer.create(data.photographerData, (err, seededPhotographers) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededPhotographers.length, 'photographers created successfully');
    console.log('done!');

    process.exit();
  });
});