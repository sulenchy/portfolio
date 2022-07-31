import { NextApiRequest, NextApiResponse } from 'next'
import { experiences } from '../../utils/index'

export const experienceHandler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (typeof experiences !== 'object') {
      throw new Error('Cannot find list of experience')
    }

    res.status(200).json(experiences)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default experienceHandler;
