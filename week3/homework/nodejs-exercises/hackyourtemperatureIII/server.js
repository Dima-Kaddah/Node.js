const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');
const app = express();
const port = process.env.port || 3000;

//for data type
app.use(express.urlencoded({ extended: true }));
//making templates to create a frontend that will be a simple page with a form
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.get('/', function(req, res) {
  const headLine = 'Weather App';
  res.render('index', { headLine });
});

// The Backend//creating a POST route that will allow us to access the submitted form data.
app.post('/weather', (req, res) => {
  const newCityName = req.body.cityName;
  const APIKEY = require('./sources/keys.json').API_KEY;
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${newCityName}&APPID=${APIKEY}`,
    )
    .then(res => {
      return res.data;
    })
    .then(showData => {
      const city = showData.name;
      const Temperature = `${showData.main.temp} °F`;
      const maxTemperature = `${showData.main.temp_max} °F`;
      const minTemperature = `${showData.main.temp_min} °F`;
      const weatherDescription = `its ${showData.weather[0].description}`;
      const weatherText = {
        Temperature,
        maxTemperature,
        minTemperature,
        weatherDescription,
        city,
      };
      console.log(showData);
      res.render('index', weatherText);
    })
    .catch(err => {
      const errMessage = err;
      console.log(errMessage);
      res.render('index', { errMessage });
    });
});
app.listen(port, () => console.log(`server at ${port}`));
