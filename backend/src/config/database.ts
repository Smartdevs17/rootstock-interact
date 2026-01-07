import mongoose from 'mongoose'
import { env } from './env.js'
import { logger } from './logger.js'

export const connectDatabase = async (): Promise<void> => {
	try {
		await mongoose.connect(env.MONGODB_URI)
		logger.info('✅ Connected to MongoDB')
	} catch (error) {
		logger.error('❌ MongoDB connection error:', error)
		process.exit(1)
	}
}

export const disconnectDatabase = async (): Promise<void> => {
	try {
		await mongoose.disconnect()
		logger.info('✅ Disconnected from MongoDB')
	} catch (error) {
		logger.error('❌ MongoDB disconnection error:', error)
	}
}

