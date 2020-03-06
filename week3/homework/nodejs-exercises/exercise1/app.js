'use strict';
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = 3000;
const URL_API = 'http://api.icndb.com/jokes/random/';

app.use(express.json());

app.get('/', (req, res) => {
  fetch(URL_API)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.value.joke);
    })
    .catch(err => {
      console.error(`there is something wrong ${err}`);
    });
});

app.listen(port, () => console.log(`Listening to Port ${port}`));
