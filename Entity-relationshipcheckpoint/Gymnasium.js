const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gymnasiumSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  telephone: { type: String, required: true }
});

const Gymnasium = mongoose.model('Gymnasium', gymnasiumSchema);

module.exports = Gymnasium;