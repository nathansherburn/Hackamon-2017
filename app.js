const express = require('express')
const csv = require('csvtojson')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

let app = express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

let db

MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hackamon', function(err, database){
  if (err) return console.log(err)
  db = database
})



app.get('/search', function(req, res) {

  console.log('searching for ...' + req.query.query)
  db.collection('equipment')
  .find({$text: {$search: req.query.query}}, {score: {$meta: "textScore"}})
  .sort({score:{$meta:"textScore"}})
  .toArray(function(err, docs) {
    if (err) return console.log(err)
    if (docs.length === 0) {
      db.collection('equipment')
      .find({}).toArray(function(err, docs) {
        if (err) return console.log(err)
        res.send(docs)
      })    
    } else {
      res.send(docs)
    }
  })
})

app.listen(3000)
