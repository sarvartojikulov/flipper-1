import jwt from 'jsonwebtoken';
import dbConnect from '../../utils/dbConnect'
import cookie from 'cookie'
const User = require('../../models/User');

dbConnect();


let three_days = 3* 24 * 60* 60
const createToken = (id) => {
  //TODO secret key to env variables
  //TODO jwt cookie only on session, then delete in signup function
  //TODO auth_middleware.js delete secretkey
  let secretkey = process.env.JWT_CODE
  return jwt.sign({id}, secretkey, {
    expiresIn: '1h'
  })
}

export default async (req,res) => {
  const {email} = req.body;
  const {method} = req;
  switch (method){
    case 'POST':
      try {
        const user = await User.login(email)    
        const token = createToken(user._id);
        res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
          httpOnly:true,
          secure:'development',
          sameSite:'strict',
          maxAge: 3600,
          path: '/'
        }))
        res.status(200).json({message: 'Welcome ' + user.name,})
      } catch (err) {
        console.log(err);
        res.status(400).json({err});
      }
      break;
  }
}