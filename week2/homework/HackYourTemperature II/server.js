const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');
const app = express();
const port = process.env.port || 4000;

//for data type
app.use(express.urlencoded({ extended: true }));
//making templates to create a frontend that will be a simple page with a form
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.get('/', function(req, res) {
  res.render('index');
});

// The Backend//creating a POST route that will allow us to access the submitted form data.
app.post('/weather', (req, res) => {
  const newCityName = req.body.cityName;
  res.render('index', { cityName: newCityName });
});
app.listen(port, () => console.log(`server at ${port}`));
