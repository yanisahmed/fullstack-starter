import config from '../../../config'
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
    throw new Error('Unable to create new User')
  }
  return newUser
}

export default {
  createUser,
}
