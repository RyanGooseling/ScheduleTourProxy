const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/homes/:id', express.static(__dirname + '/client'));

// How do I account for POST requests here?

// Nathaniel
app.get('/data/homes/:id', (req, res) => {
  axios({
    method: 'get',
    url: `http://localhost:3001/data/homes/${req.params.id}`
  })
    .then((newData) => {
      console.log('Successful GET Req for Similar Homes')
      let rawData = newData.data;
      res.send(rawData)
    })
    .catch((err) => {
      console.log('Error', err);
    });
})

// Muhammad
app.get('/homes/:id/schools', (req, res) => {
  axios({
      method: 'get',
      url: `http://localhost:3002/homes/${req.params.id}/schools`
    })
      .then((newData) => {
        console.log('Successful GET Req for Schools')
        let rawData = newData.data;
        res.send(rawData)
      })
      .catch((err) => {
        console.log('Error', err);
      });
})

// Sam
app.get('/homes/:id', (req, res) => {
  console.log('GET Req for Photo-Carousel')
  axios({
    method: 'get',
    url: `http://localhost:3003/house/${req.params.id}`
  })
    .then((newData) => {
      console.log('Successful GET Req for Photo-Carousel')
      let rawData = newData.data;
      res.send(rawData)
    })
    .catch((err) => {
      console.log('Error', err);
    });
})

// Andrew
app.get('/homes/:id/schedule', (req, res) => {
  axios({
    method: 'get',
    url: `http://localhost:3004/homes/${req.params.id}/schedule`
  })
    .then((newData) => {
      console.log('Successful GET Req for Schedule')
      let rawData = newData.data;
      res.send(rawData)
    })
    .catch((err) => {
      console.log('Error with Schedule');
    });
})



app.listen(port, () => {
  console.log(`Bluefin listening at http://localhost:${port}`);
});