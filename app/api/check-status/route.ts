import { type NextRequest, NextResponse } from "next/server"

const ALLOWED_HOSTS = new Set([
  "fleetmanager.tech",
  "quizlink.net",
  "alphacomonline.com",
])

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 })
  }

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 })
  }

  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    return NextResponse.json({ error: "Invalid protocol" }, { status: 400 })
  }

  const host = parsed.hostname.toLowerCase().replace(/^www\./, "")
  if (!ALLOWED_HOSTS.has(host)) {
    return NextResponse.json({ error: "Host not allowed" }, { status: 403 })
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    const response = await fetch(parsed.toString(), {
      method: "HEAD",
      signal: controller.signal,
      redirect: "follow",
    })

    clearTimeout(timeoutId)
    return NextResponse.json({ isLive: response.ok })
  } catch {
    return NextResponse.json({ isLive: false })
  }
}
