const { Schema, model } = require('mongoose');

const CapsuleSchema = new Schema({
  title: { 
      type: String,
      required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,  // Change this from true to false
},
  letter: {
      type: String,
      required: true,
  },
    openDate: {
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
