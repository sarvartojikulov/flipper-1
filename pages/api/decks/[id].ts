import dbConnect from '../../../utils/dbConnect'
const Deck = require('../../../models/Deck');

dbConnect();
//NOTE deckid;

export default  async (req, res) => {
  const {
    query: {id},
    method
  } = req;
  const {question, answer} = req.body

  switch(method) {
    //SECTION get cardlist by deckID
    case 'GET': 
    try {
      const list = await Deck.findById(id,'content').exec();
      res.json(list)
    } catch (error) {
      res.json(error)
    }
    break;
    //SECTION Create a cart in deckID
    case 'POST':
      try {
        await Deck.findByIdAndUpdate(id,{$push:{
          content: [{
            question,
            answer
          }]
        }})
        res.json({question,answer});
      } catch (error) {
        res.json(error)
      }
  }
}