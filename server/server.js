const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Magic The Gathering Cards')
})

app.get('/cards-data', (req, res) => {
  const promises = [160, 161, 162, 163, 164, 209, 210, 211, 212, 213, 214, 215, 216, 453, 454, 455, 456, 460, 461, 462, 463, 466, 467, 468, 533, 534, 535, 536].map(num => {
    return fetch(`https://api.magicthegathering.io/v1/cards?page=${num}&per_page=100`)
      .then(res => res.json());
  });

  Promise.all(promises)
    .then(data => {
      const cardData = {
        cards: []
      };
      for (let cardDataObject of data) {
        for (let card of cardDataObject.cards) {
          cardData.cards.push(card);
        }
      }

      res.json(cardData);
    })
})

app.listen(3000, function() {
  console.log(`App is listening on port ${this.address().port}`);
})
