const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  last_name: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  gymnasium: { type: Schema.Types.ObjectId, ref: 'Gymnasium', required: true }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
