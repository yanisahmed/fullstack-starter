import { Request, Response } from 'express'
import userService from './user.service'

const userController = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const results = await userService.createUser(user)

    res.status(200).json({
      success: true,
      message: 'User Added',
      data: results,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to create new User',
    })
  }
}

export default userController
