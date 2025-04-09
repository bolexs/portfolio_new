/**
 * Checks if a website is currently live
 * @param url The URL to check
 * @returns Promise that resolves to true if the site is live, false otherwise
 */
export async function checkSiteStatus(url: string): Promise<boolean> {
  try {
    // In a real implementation, you would use a proxy or backend API to check the site status
    // For client-side, direct fetch requests to external domains will be blocked by CORS

    // This is a simulated implementation
    const response = await fetch(`/api/check-status?url=${encodeURIComponent(url)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.ok
  } catch (error) {
    console.error(`Error checking status for ${url}:`, error)
    return false
  }
}
