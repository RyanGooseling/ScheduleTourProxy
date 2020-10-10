require('dotenv').config()
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const currentIP = process.env.IP

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/homes/:id', express.static(__dirname + '/client'));

// How do I account for POST requests here?

// Nathaniel
app.get('/data/homes/:id', (req, res) => {
  axios({
    method: 'get',
    url: `http://35.170.191.195:3001/data/homes/${req.params.id}`
  })
    .then((newData) => {
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
        let rawData = newData.data;
        res.send(rawData)
      })
      .catch((err) => {
        console.log('Error', err);
      });
})

app.post('/homes/:id/schools/reviews', (req, res) => {
  axios({
      method: 'post',
      url: `http://localhost:3002/homes/${req.params.id}/schools/reviews`,
      data: req.body
    })
      .then((newData) => {
        let rawData = newData.data;
        res.send(rawData)
      })
      .catch((err) => {
        console.log('Error', err);
      });
})

// Sam
app.get('/homes/:id', (req, res) => {
  axios({
    method: 'get',
    url: `http://localhost:3003/homes/${req.params.id}`
  })
    .then((newData) => {
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
    url: `http://54.193.202.190:3004/homes/${req.params.id}/schedule`
  })
    .then((newData) => {
      let rawData = newData.data;
      res.send(rawData)
    })
    .catch((err) => {
      console.log('Error with Schedule');
    });
})

app.post('/homes/:id/schedule', (req, res) => {
  axios({
    method: 'post',
    url: `http://54.193.202.190:3004/homes/${req.params.id}/schedule`,
    data: req.body
  })
    .then((newData) => {
      let rawData = newData.data;
      res.send(rawData)
    })
    .catch((err) => {
      console.log('Error with Schedule');
    });
})


app.listen(port, () => {
  console.log(`Bluefin listening at http://${currentIP}:${port}/homes/1/`);
});