import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Headers de segurança adicionais
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // CORS para requisições de origem cruzada (ajuste conforme necessário)
  const origin = request.headers.get('origin')
  if (origin && request.url.includes('/api/')) {
    // Para produção, adicione apenas origens confiáveis
    // response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  }

  return response
}

export const config = {
  matcher: ['/:path*'],
}
