import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser) => {
  if (!user.id) {
    const user_id = await generateUserId()
    user.id = user_id
  }
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const newUser = await User.create(user)
  if (!newUser) {
    throw new ApiError(400, 'Unable to create new User, Service')
  }
  return newUser
}

export default {
  createUser,
}
