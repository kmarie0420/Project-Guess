const { Schema, model } = require('mongoose');

const CapsuleSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true, 
  },
  letter: {
    type: String,
    required: true,
    trim: true,
  },
  openDate: {
    type: Date,
    required: true,
  },
  isOpened: {
    type: Boolean,
    default: false,
  },

});

const Capsule = model('Capsule', CapsuleSchema);

module.exports = Capsule;