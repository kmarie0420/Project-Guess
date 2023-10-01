const { Schema, model } = require('mongoose');

const CapsuleSchema = new Schema({
  title: { 
      type: String,
      required: true,
  },
  userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
  },
  letter: {
      type: String,
      required: true,
  },
  isOpened: {
    type: Boolean,
    default: false,
},
});

const Capsule = model('Capsule', CapsuleSchema);

module.exports = Capsule;
