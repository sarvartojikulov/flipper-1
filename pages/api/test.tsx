import dbConnect from '../../utils/dbConnect'
const User = require('../../models/User');
dbConnect()

export default async (req,res) => {
  const {method} = req;
  switch (method){
    case 'POST':
      try {
        User.collection.deleteMany({});
        res.json({succses: "true"})
      } catch (error) {
        res.json({error})
      }
      break;
  }
}