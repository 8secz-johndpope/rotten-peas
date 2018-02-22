const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use('/static', express.static('static'));


app.listen(8080, function(){
  console.log('I am listening on port 8080');
});
