const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  sport: { type: String, required: true },
  schedule: { type: String, required: true },
  gymnasium: { type: Schema.Types.ObjectId, ref: 'Gymnasium', required: true },
  coaches: [{ type: Schema.Types.ObjectId, ref: 'Coach' }],
  max_members: { type: Number, default: 20 }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
