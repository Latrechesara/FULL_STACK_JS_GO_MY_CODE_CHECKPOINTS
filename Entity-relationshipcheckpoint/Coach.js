const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coachSchema = new Schema({
  last_name: { type: String, required: true },
  first_name: { type: String, required: true },
  age: { type: Number, required: true },
  specialty: { type: String, required: true },
  sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }]
});

const Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;
