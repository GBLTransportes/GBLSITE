import { NextRequest, NextResponse } from 'next/server'

// Regex para validação
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s\-\+\(\)]{10,20}$/
const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s\-]{2,100}$/

// Rate limiting simples (em produção, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 })
    return true
  }

  if (limit.count >= 5) {
    return false
  }

  limit.count++
  return true
}

function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/[<>\"'&]/g, (match) => {
      const entities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;',
      }
      return entities[match] || match
    })
    .trim()
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente em 1 minuto.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, company, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando: name, email, phone, message' },
        { status: 400 }
      )
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof phone !== 'string' || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Tipos de dados inválidos' },
        { status: 400 }
      )
    }

    if (name.length > 100 || email.length > 100 || phone.length > 20 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Dados muito longos' },
        { status: 400 }
      )
    }

    if (!NAME_REGEX.test(name)) {
      return NextResponse.json(
        { error: 'Nome inválido' },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      )
    }

    if (!PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { error: 'Telefone inválido' },
        { status: 400 }
      )
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: company ? sanitizeInput(company) : '',
      message: sanitizeInput(message),
    }

    console.log(`Contato recebido de ${ip} às ${new Date().toISOString()}`)

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!', data: sanitizedData },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
          'Cache-Control': 'no-store',
        },
      }
    )
  } catch (error) {
    console.error('Erro ao processar contato', error)

    return NextResponse.json(
      { error: 'Erro ao processar sua solicitação. Tente novamente.' },
      {
        status: 500,
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'Cache-Control': 'no-store',
        },
      }
    )
  }
}
