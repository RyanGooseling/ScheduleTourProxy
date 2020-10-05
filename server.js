const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// What goes here for this circumstance?
app.use(express.static(__dirname));


app.listen(port, () => {
  console.log(`Bluefin listening at http://localhost:${port}`);
});