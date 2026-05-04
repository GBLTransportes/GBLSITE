'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary text-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center py-1">
            <img
              src="/images/LogotipoGBL.png"
              alt="GBL Transportes"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-secondary transition">Home</Link>
            <Link href="#sobre" className="hover:text-secondary transition">Sobre</Link>
            <Link href="#servicos" className="hover:text-secondary transition">Serviços</Link>
            <Link href="#contato" className="hover:text-secondary transition">Contato</Link>
            <a
              href="https://wa.me/5511982043652?text=Olá%20GBL%20Transportes!%20Gostaria%20de%20solicitar%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition"
            >
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <Link href="/" className="block hover:text-secondary py-2">Home</Link>
            <Link href="#sobre" className="block hover:text-secondary py-2">Sobre</Link>
            <Link href="#servicos" className="block hover:text-secondary py-2">Serviços</Link>
            <Link href="#contato" className="block hover:text-secondary py-2">Contato</Link>
            <a
              href="https://wa.me/5511982043652?text=Olá%20GBL%20Transportes!%20Gostaria%20de%20solicitar%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition text-center"
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
