import express, { Application } from 'express'
import cors from 'cors'
import router from './app/modules/user/user.routes'
import globalErrorHandler from './middlewares/globalErrorHandler'
const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotues
app.use('/api/v1/user', router)

// Testing
// app.use('/', (req: Request, res: Response, next: NextFunction) => {
//   // throw new Error('Oops! you got an error')
//   // throw new ApiError(400, 'Ore baba Error')
//   // next('Ore baba error')
// })

app.use(globalErrorHandler)
export default app
