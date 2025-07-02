import { app } from './app.js'
import dotenv from 'dotenv'
import { initDatabase } from './db/init.js'

dotenv.config() //Should call this before any code below to initiate the environment configuration

const PORT = process.env.PORT || 8080

;(async () => {
  try {
    await initDatabase()
    app.listen(PORT, '0.0.0.0', () => {
      console.info(`✅ Express server running on http://0.0.0.0:${PORT}`)
    })
  } catch (err) {
    console.error('❌ Error connecting to database:', err)
    process.exit(1)
  }
})()
