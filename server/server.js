const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Magic The Gathering Cards')
})

app.get('/cards-data', (req, res) => {
  const url = 'https://api.magicthegathering.io/v1/cards';

  fetch(url)
  .then(res => res.json())
  .then(data => res.json(data));
})

app.listen(3000, function() {
  console.log(`App is listening on port ${this.address().port}`);
})
