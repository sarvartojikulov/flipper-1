import dbConnect from '../../../utils/dbConnect'
import {autheenticated} from '../../../utils/auth_middleware'
const Deck = require('../../../models/Deck');
const User = require('../../../models/User');
//NOTE POST method creates a new deck
//NOTE GET method gets all decks
//NOTE required to pass a userID as body

  //TODO delete userID and fix the cases
const id = '6078b6bb9944591a9466d58c';
dbConnect()
export default autheenticated(async (req,res) => {
  const {method} = req;
  switch (method) {
    case 'GET':
      try {
        const userDecklist = await User.findById(id,'decklist').exec();
        const arr = [];
        for(let item of (userDecklist as any).decklist){
          let deck = await Deck.findById(item , 'name content').exec();
          arr.push(deck);
        }
        res.json(arr);
      } catch (error) {
        res.status(400).json({succsess: false})
      }
      break;
    case 'POST':
      try {
        const {name} = req.body;
        const deck = await Deck.create({name});
        await User.findByIdAndUpdate(id, {$addToSet: {
        decklist: deck._id 
        //NOTE selects decklist of user and adds actuall deckID of created DECK
        // $addToSet method handles duplicated ID in Array
      }})
        res.status(201).json({success: true, data: deck})
      } catch (error) {
        res.status(400).json({success: false});
      }
  }
})