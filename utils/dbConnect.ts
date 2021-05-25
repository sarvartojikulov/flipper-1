import mongoose from 'mongoose'


async function dbConnect() {
  if(mongoose.connections[0].readyState){
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true, useUnifiedTopology:true , useCreateIndex:true, autoIndex: true })
  .catch(err => console.log(err)
  )
  return db;
}

export default dbConnect;