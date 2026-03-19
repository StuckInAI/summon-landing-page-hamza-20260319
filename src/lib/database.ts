import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { ContactSubmission } from '@/entities/ContactSubmission'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE_URL || './database.sqlite',
  synchronize: true,
  logging: false,
  entities: [ContactSubmission],
  migrations: [],
  subscribers: [],
})

// Initialize the connection
export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize()
    console.log('Database connection established')
  } catch (error) {
    console.error('Error connecting to the database:', error)
    throw error
  }
}