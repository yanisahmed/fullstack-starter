import { User } from './user.model'

export const findLastUserId = async () => {
  const lastRegisteredUserId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .limit(1)
    .lean()
  return lastRegisteredUserId?.id
}

export const generateUserId = async () => {
  const generatedUserId =
    (await findLastUserId()) || (0).toString().padStart(5, '0')
  const incrementedUserId = (parseInt(generatedUserId) + 1)
    .toString()
    .padStart(5, '0')

  return incrementedUserId
}
