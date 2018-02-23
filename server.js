const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use('/static', express.static('static'));


app.get('/', function(req, res){
  fetch('https://gpodder.net/toplist/50.json')
  .then(function(response){
    return response.json();
  }).then(function(json){
    let podcastData = json;
    res.render('index', podcastData);
  }). catch(function(error){
    res.status(500).json({error: 'Failed to get data'});
  });
});

app.get('/test', function(req,res){
  fetch('https://gpodder.net/toplist/10.json')
  .then(function(response){
    return response.json();
  }).then(function(jsonData){
    let podcastData = jsonData;

    // console.log(podcastData[1]);
    // res.render('test', podcastData[1]);

    res.render('test', podcastData);

  }).catch(function(error){
    res.status(500).json({error: 'Failed to get data'});
  });
})

app.listen(8080, function(){
  console.log('I am listening on port 8080');
});
