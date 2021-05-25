//NOTE @Serviece(Java/ Springboot) is the same shit Interfaces(typescript)
import * as mongoose from 'mongoose'
import bcrypt from 'bcrypt'
// const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
  googleId: {
    type:String,
    required:true,
    unique: true
  },
  email : {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase:true
    // validate: [isEmail, 'Please enter a valid email']
  },
  name : {
    type: String,
    required: true
  },
  decklist: [String]
})
//SECTION User.login function in /api/login
//NOTE //checks if db has email/(id) .then LOGIN
userSchema.statics.login = async function(input_email) {
  const user = await this.findOne({email: input_email})
  if (user) {
      return user
    } else {
      throw Error('no such user')
    }
}

module.exports = mongoose.models.User || mongoose.model('User', userSchema);