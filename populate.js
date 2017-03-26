const MongoClient = require('mongodb').MongoClient
const csv = require('csvtojson')


MongoClient.connect('mongodb://localhost:27017/hackamon', function(err, db) {
    if (err) return console.log(err)
    let equipment = db.collection('equipment')
    csv()
    .fromFile('equip.csv')
    .on('json', json => equipment.insert(json))
    .on('done', function() {
      equipment.createIndex({"$**":"text"})
      db.close()
    })
  })