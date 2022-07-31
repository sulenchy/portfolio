import { NextApiRequest, NextApiResponse } from 'next'
import { skills } from '../../utils/index'


export const skillsHandler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (typeof skills !== 'object') {
        throw new Error('Cannot find skills')
      }
  
      res.status(200).json(skills)
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }

  export default skillsHandler;
