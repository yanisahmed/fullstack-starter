import * as winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import path from 'path'

const infoLogger: DailyRotateFile = new DailyRotateFile({
  filename: path.join(
    process.cwd(),
    'logs',
    'winston',
    'success',
    'application-%DATE%.log',
  ),
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
})
const errorLogger: DailyRotateFile = new DailyRotateFile({
  level: 'error',
  filename: path.join(
    process.cwd(),
    'logs',
    'winston',
    'error',
    'application-%DATE%.log',
  ),
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
})

const logger = winston.createLogger({
  transports: [new winston.transports.Console(), infoLogger, errorLogger],
})

export default logger
