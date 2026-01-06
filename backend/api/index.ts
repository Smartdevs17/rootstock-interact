import { createApp } from '../src/app.js'
import { connectDatabase } from '../src/config/database.js'

const app = createApp()

let isConnected = false

const startServer = async (): Promise<void> => {
	try {
		if (!isConnected) {
			await connectDatabase()
			isConnected = true
		}
	} catch (error) {
		console.error('❌ Failed to connect to database:', error)
	}
}

export default async function handler(req: any, res: any) {
	await startServer()
	
	app(req, res)
}
