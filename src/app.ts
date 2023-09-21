import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/modules/user/user.routes'
const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotues
app.use('/api/v1/user', router)
app.use('/', (req: Request, res: Response) => {
  res.send('API Home!')
})

export default app
