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
    headers: { authorization: `basis ${enCoPs}` },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.error.message);
    })
    .catch(err => {
      console.error(`somthing went wrong ${err}`);
      res.end('somthing went wrong');
    });
});

app.listen(port, () => console.log(`Listening to Port ${port}`));
