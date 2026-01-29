const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/testdb', { useNewUrlParser: true, useUnifiedTopology: true });

const Gymnasium = require('./models/gymnasium');
const Member = require('./models/member');
const Session = require('./models/session');
const Coach = require('./models/coach');

// Create a new gymnasium
const gymnasium = new Gymnasium({
  name: 'Gymnasium A',
  address: '123 Main St',
  telephone: '555-1234'
});
gymnasium.save((err, savedGymnasium) => {
  if (err) {
    console.error(err);
  } else {
    console.log(savedGymnasium);
  }
});
