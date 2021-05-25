const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
})

const deckSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: true
  },
  content: [cardSchema],
  userHandle: String
},{ 
  timestamps: {} 
})
mongoose.set('useFindAndModify', false);

module.exports = mongoose.models.Deck || mongoose.model('Deck', deckSchema);