'use strict';
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = 3000;
const URL_API = 'https://reservation100-sandbox.mxapps.io/api/reservations';

const dataBody = {
  "name": "Dima Kaddah",
  "numberOfPeople": 13,
}

app.get('/', (req, res) => {
  fetch(URL_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataBody),
  })
    .then(res => {
      return res.text();
    })
    .then(text => {
      res.send(text);
    })
    .catch(err => {
      res.send(`somthing went wrong ${err}`);
      console.error(`somthing went wrong ${err}`);
    });
});
app.listen(port, () => console.log(`Listening to Port ${port}`));

//curl -X POST "https://reservation100-sandbox.mxapps.io/api/reservations" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"name\": \"Dima Kaddah\", \"numberOfPeople\": 13}`"
