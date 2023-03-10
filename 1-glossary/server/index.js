require("dotenv").config();
const express = require("express");
const path = require("path");
const Entry = require("./db").Entry;

const app = express();

// Serves up all static and generated assets in ../client/dist.
// default is index.js
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/', (req, res) => {
  // send req.body to db
  const glossaryEntry = new Entry(req.body);
  glossaryEntry.save((err, entry) => {
    if (err) {
      return err;
    }
    console.log(entry.term + ' saved to db!');
  });
  res.sendStatus(201);
});

app.get('/glossary', (req, res) => {
  Entry.find({}, (err, docs) => {
    if (err) {
      return err;
    }
    console.log('docs: ', docs);
    res.send(docs);
  });
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
