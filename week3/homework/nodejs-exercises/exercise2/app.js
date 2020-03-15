'use strict';
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = 3000;
const URL_API = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books ';
const authentication = 'admin:hvgX8KlVEa';
const enCoPs = Buffer.from(authentication).toString('base64');
console.log(enCoPs);

app.use(express.json());

app.get('/', (req, res) => {
  fetch(URL_API, {
    headers: { authorization: `Basic ${enCoPs}` },
  })
    .then(res => res.json())
    .then(data => {
      res.send(data);
      res.end();
    })
    .catch(err => {
      res.end(`somthing went wrong ${err}`);
    });
});

app.listen(port, () => console.log(`Listening to Port ${port}`));
