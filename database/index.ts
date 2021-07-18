import { createConnection, getConnectionOptions } from 'typeorm'

interface IOptions {
  host: string
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions
  newOptions.host = 'movie_db'
  createConnection({
    ...options,
  }).then(() => console.log('connected'))
})
