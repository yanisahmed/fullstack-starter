import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (req: Request, res: Response) => {
  res.send('API Home!')
})

export default app
