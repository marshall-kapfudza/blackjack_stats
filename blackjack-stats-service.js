const app = require('express')();

// get the data from firebase database
let black_jack_stats = [
    {
        id: 1,
        title: "Wins",
        count: 86
    },
    {
        id: 2,
        title: "Loss",
        count: 86
    }
];
  
 
// Display products data in an api
app.get('/win/loss', (req, res) => {
    res.send(
        black_jack_stats
    );
});

app.listen(3000, () => console.log('Blackjack Stats Service is listening on http://localhost:3000/win/loss'));