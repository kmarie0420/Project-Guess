const { Schema, model } = require('mongoose');

const CapsuleSchema = new Schema({
  note: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Capsule = model('Capsule', CapsuleSchema);

module.exports = Capsule;
