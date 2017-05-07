const Client = require('coinbase').Client;
const client = new Client({'apiKey': 'API KEY',
                         'apiSecret': 'API SECRET'});

module.exports = function(app) {
  app.get('/price/:currency', (req, res) => {
    const curr = req.params.currency;
    client.getExchangeRates({'currency': curr}, function(err, rates) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(rates);
      }
    });
  });
};
