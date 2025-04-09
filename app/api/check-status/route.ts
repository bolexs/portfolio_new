import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 })
  }

  try {
    // In a real implementation, you would make a request to the URL
    // and check if it returns a successful status code

    // For demo purposes, we'll simulate with a random result
    const isLive = Math.random() > 0.2 // 80% chance of being online

    return NextResponse.json({ isLive })
  } catch (error) {
    console.error(`Error checking status for ${url}:`, error)
    return NextResponse.json({ isLive: false })
  }
}
