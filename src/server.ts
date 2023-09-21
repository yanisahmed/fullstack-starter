import mongoose from 'mongoose'
import config from './config'
import app from './app'
import logger from './shared/logger'
const boostrap = async () => {
  try {
    mongoose
      .connect(config.database_url as string)
      .then(() => {
        // console.log('Database Connected Successfully')
        logger.info('Database Connected Successfully')
      })
      .catch(error => {
        // console.log('Connection with database was failed!', error)
        logger.error('Connection with database was failed!', error)
      })

    app.listen(config.port, () => {
      //   console.log(`Application is running on port ${config.port}`)
      logger.info(`Application is running on port ${config.port}`)
    })
  } catch (error) {
    console.log('Something Went wrong while connecting to database', error)
  }
}

boostrap()
