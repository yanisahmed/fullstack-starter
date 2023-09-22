import { NextFunction, Request, Response } from 'express'
import userService from './user.service'

const userController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { user } = req.body
    const results = await userService.createUser(user)

    res.status(200).json({
      success: true,
      message: 'User Added',
      data: results,
    })
  } catch (error) {
    next(error)
  }
}

export default userController
