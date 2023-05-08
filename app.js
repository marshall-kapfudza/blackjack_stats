const express = require('express');
const app = express();
const fetch =  require('node-fetch');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// API URL
const apiURL = 'http://localhost:4000/win/loss';

const getBlackJackStats =  async () => {
  const response = await fetch(apiURL);
  if (response.ok) {
    const data = await response.json();
    console.log('Data: ', data);
  }
}

// home/product page route
app.get('/', (req, res) => {
    let stats = getBlackJackStats(); // call the endpoint
    console.log(stats);
    return res.send("Black Jack Stats page");
});

app.listen(3001, () => console.log('UI app is listening on port 3001. URL: http://localhost:3001/'));