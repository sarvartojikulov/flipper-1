import {NextApiHandler, NextApiRequest,NextApiResponse} from 'next'
import {verify} from 'jsonwebtoken'

export const autheenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
  ) => {
      verify(req.cookies.auth!, process.env.JWT_CODE, 
      async function(err,decoded){
        if(!err && decoded){
          return await fn(req,res);
        }
        res.status(401).json({message: 'Sorry u r not authn'});
    })
  }