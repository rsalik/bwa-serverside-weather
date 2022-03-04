const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

//If we decide to use server-side templating . . . instead of static index.html
app.set('view engine', 'pug'); //for pug syntax highlighting: https://atom.io/packages/language-pug-jade

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/forecast', function (req, res) {
  //note, Westport longitude is negative. Otherwise you get Jalal-Abad, Kyrgyzstan
  axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=41.1415&lon=-73.3579&appid=${process.env.API_KEY}`)

    .then(function (response) {
      console.log(response.data);

      //if we use server-side templating we can inject data returned form weather service into a whole new page
      res.render('weather_page', { weather: response.data });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.send('Try again. There was an error.');
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
