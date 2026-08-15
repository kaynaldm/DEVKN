import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const filepath = searchParams.get('path')

  if (!filepath) {
    return new NextResponse('Path is required', { status: 400 })
  }

  try {
    // Basic security check to only allow images from the artifacts folder
    if (!filepath.includes('.gemini') && !filepath.includes('antigravity-ide')) {
      return new NextResponse('Forbidden path', { status: 403 })
    }

    const fileBuffer = fs.readFileSync(filepath)
    
    const ext = path.extname(filepath).toLowerCase()
    let contentType = 'image/png'
    if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg'
    else if (ext === '.webp') contentType = 'image/webp'
    else if (ext === '.svg') contentType = 'image/svg+xml'

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    return new NextResponse('File not found or error reading file', { status: 404 })
  }
}
