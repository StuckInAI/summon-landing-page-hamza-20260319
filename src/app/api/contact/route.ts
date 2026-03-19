import { NextRequest, NextResponse } from 'next/server'
import { validate } from 'class-validator'
import { ContactSubmission } from '@/entities/ContactSubmission'
import { initializeDatabase, AppDataSource } from '@/lib/database'

// Initialize database on first request
let dbInitialized = false

async function ensureDbInitialized() {
  if (!dbInitialized) {
    await initializeDatabase()
    dbInitialized = true
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDbInitialized()

    const body = await request.json()
    const { name, email, message } = body

    // Create and validate submission
    const submission = new ContactSubmission()
    submission.name = name.trim()
    submission.email = email.trim()
    submission.message = message.trim()

    const errors = await validate(submission)
    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors.map(e => e.constraints) },
        { status: 400 }
      )
    }

    // Save to database
    const contactRepository = AppDataSource.getRepository(ContactSubmission)
    await contactRepository.save(submission)

    return NextResponse.json(
      { message: 'Contact submission saved successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving contact submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}