import { createApp } from './app.js'
import { connectDatabase, disconnectDatabase } from './config/database.js'
import { env } from './config/env.js'
import { logger } from './config/logger.js'

const app = createApp()

const startServer = async (): Promise<void> => {
	try {
		await connectDatabase()

		const port = parseInt(env.PORT, 10)
		app.listen(port, () => {
			logger.info(`🚀 Server running on port ${port}`)
			logger.info(`📡 Environment: ${env.NODE_ENV}`)
			logger.info(`🔗 API: http://localhost:${port}${env.API_PREFIX}`)
		})
	} catch (error) {
		logger.error('❌ Failed to start server:', error)
		process.exit(1)
	}
}

process.on('SIGTERM', async () => {
	logger.info('SIGTERM received, shutting down gracefully...')
	await disconnectDatabase()
	process.exit(0)
})

process.on('SIGINT', async () => {
	logger.info('SIGINT received, shutting down gracefully...')
	await disconnectDatabase()
	process.exit(0)
})

startServer()

