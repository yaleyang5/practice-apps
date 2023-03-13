const model = require('./models');

const get = (req, res) => {
  model.get()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
}

const post = (req, res) => {
  // console.log(req.body);
  model.post(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
}

module.exports = {get, post};