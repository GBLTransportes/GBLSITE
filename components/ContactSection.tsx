'use client'

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

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
    setSubmitted(true)
    
    // Simular envio
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contato" className="py-20 px-4 bg-primary text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-gray-300">
            Estamos prontos para ajudar! Solicite um orçamento ou tire suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Info Cards */}
          <div className="animate-slide-up">
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold mb-2">Telefone</h3>
              <p className="text-gray-200">(11) 98204-3652</p>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-200">sac1@gbltransportes.com.br</p>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold mb-2">Endereço</h3>
              <p className="text-gray-200">Guarulhos, SP, Brasil</p>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur p-8 rounded-lg animate-fade-in">
          {submitted && (
            <div className="bg-green-500 text-white p-4 rounded-md mb-6 text-center font-bold">
              ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="tel"
              name="phone"
              placeholder="Seu Telefone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="text"
              name="company"
              placeholder="Sua Empresa"
              value={formData.company}
              onChange={handleChange}
              className="px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <textarea
            name="message"
            placeholder="Sua Mensagem / Orçamento"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary mb-6"
          />

          <button
            type="submit"
            className="w-full bg-golden text-white font-bold py-3 rounded-md hover:bg-golden-dark transition text-lg"
          >
            Enviar Mensagem
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-gray-300 mb-4">ou fale conosco direto pelo WhatsApp:</p>
          <a
            href="https://wa.me/5511982043652?text=Olá%20GBL%20Transportes!%20Gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition"
          >
            💬 Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
