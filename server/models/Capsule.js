const { Schema, model } = require('mongoose');

const CapsuleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true, // Change this from true to false
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
  photoURLs: [
    {
      type: String,
      default: 'http://placekitten.com/g/200/300',
      trim: true,
    },
  ],
});

const Capsule = model('Capsule', CapsuleSchema);

module.exports = Capsule;