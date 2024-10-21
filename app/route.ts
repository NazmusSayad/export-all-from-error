import { Role } from './db'
import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    message: 'Hello from the API!',
    userRoleFromPrisma: Role ?? 'NOT WORKING IN TURBO MODE',
  })
}
