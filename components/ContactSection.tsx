'use client'

import Link from 'next/link'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [acceptedPolicy, setAcceptedPolicy] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    setSubmitted(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setErrorMessage(data.error || 'Nao foi possivel enviar sua mensagem agora.')
        return
      }

      setSubmitted(true)
      setAcceptedPolicy(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
    } catch {
      setErrorMessage('Erro de conexao. Tente novamente em instantes.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="bg-primary px-4 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-4xl font-bold">Entre em Contato</h2>
          <p className="text-gray-300">
            Estamos prontos para ajudar! Solicite um orcamento ou tire suas duvidas.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="animate-slide-up">
            <div className="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur">
              <div className="mb-3 text-3xl">Telefone</div>
              <h3 className="mb-2 font-bold">Comercial</h3>
              <p className="text-gray-200">(11) 98204-3652</p>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur">
              <div className="mb-3 text-3xl">Email</div>
              <h3 className="mb-2 font-bold">Atendimento</h3>
              <p className="text-gray-200">sac1@gbltransportes.com.br</p>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur">
              <div className="mb-3 text-3xl">Regiao</div>
              <h3 className="mb-2 font-bold">Base operacional</h3>
              <p className="text-gray-200">Guarulhos, SP, Brasil</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="animate-fade-in rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur">
          {submitted && (
            <div className="mb-6 rounded-md bg-green-500 p-4 text-center font-bold text-white">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 rounded-md bg-red-500 p-4 text-center font-bold text-white">
              {errorMessage}
            </div>
          )}

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="tel"
              name="phone"
              placeholder="Seu telefone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="text"
              name="company"
              placeholder="Sua empresa"
              value={formData.company}
              onChange={handleChange}
              className="rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <textarea
            name="message"
            placeholder="Sua mensagem ou detalhes do orcamento"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="mb-6 w-full rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <label className="mb-6 flex items-start gap-3 text-sm text-gray-200">
            <input
              type="checkbox"
              checked={acceptedPolicy}
              onChange={(e) => setAcceptedPolicy(e.target.checked)}
              required
              className="mt-1 h-4 w-4 rounded border-white/40 text-secondary focus:ring-secondary"
            />
            <span className="leading-6">
              Li e estou ciente da{' '}
              <Link href="/privacidade" className="font-semibold text-white underline underline-offset-2">
                Politica de Privacidade
              </Link>
              , incluindo o tratamento dos meus dados para retorno comercial e atendimento.
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-golden py-3 text-lg font-bold text-white transition hover:bg-golden-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </button>

          <p className="mt-4 text-sm leading-6 text-gray-300">
            Se preferir, voce tambem pode iniciar o atendimento direto pelo WhatsApp. O uso desse canal
            tambem envolve tratamento de dados pela plataforma da Meta.
          </p>
        </form>

        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-300">Ou fale conosco direto pelo WhatsApp:</p>
          <a
            href="https://wa.me/5511982043652?text=Ola%20GBL%20Transportes!%20Gostaria%20de%20solicitar%20um%20orcamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-green-500 px-8 py-3 font-bold text-white transition hover:bg-green-600"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
