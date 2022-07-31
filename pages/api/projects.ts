import { NextApiRequest, NextApiResponse } from 'next'
import { projects } from '../../utils/index'

  const projectsHandler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (typeof projects !== 'object') {
        throw new Error('Cannot find projects')
      }
  
      res.status(200).json(projects)
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  }

  export default projectsHandler;