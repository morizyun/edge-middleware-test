import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/dp/:id',
}

export function middleware(req: NextRequest) {
  // Parse the cookie
  const isInBeta = JSON.parse(req.cookies.get('beta')?.value || 'false')

  // Update url pathname
  req.nextUrl.pathname = `/dp/:id/${isInBeta ? 'beta' : 'non-beta'}`

  // Rewrite to url
  return NextResponse.rewrite(req.nextUrl)
}
