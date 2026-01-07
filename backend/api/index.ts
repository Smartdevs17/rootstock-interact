import { createApp } from '../src/app.js'
import { connectDatabase } from '../src/config/database.js'
import type { Request, Response } from 'express'
import { logger } from '../src/config/logger.js'

const app = createApp()

let isConnected = false

const ensureDbConnection = async (): Promise<void> => {
	try {
		if (!isConnected) {
			await connectDatabase()
			isConnected = true
			logger.info('✅ Database connected for serverless function')
		}
	} catch (error) {
		logger.error('❌ Failed to connect to database:', error)
		// Don't throw - allow the app to handle the request even if DB connection fails
	}
}

// Export the handler function for Vercel
export default async function handler(req: Request, res: Response) {
	await ensureDbConnection()
	return app(req, res)
}

