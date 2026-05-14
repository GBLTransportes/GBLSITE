'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const openCookiePreferences = () => {
    window.dispatchEvent(new Event('gbl:cookie-preferences'))
  }

  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">GBL Transportes</h3>
            <p className="text-sm text-gray-400">
              Solucoes inteligentes em transporte e armazenagem para sua empresa.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Servicos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#servicos" className="hover:text-secondary">Transporte Rodoviario</a></li>
              <li><a href="#servicos" className="hover:text-secondary">Armazenagem</a></li>
              <li><a href="#servicos" className="hover:text-secondary">Cross Docking</a></li>
              <li><a href="#servicos" className="hover:text-secondary">WMS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: sac1@gbltransportes.com.br</li>
              <li>Telefone: (11) 98204-3652</li>
              <li>Sao Paulo, SP</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Privacidade</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <Link href="/privacidade" className="hover:text-secondary">
                  Politica de Privacidade
                </Link>
              </p>
              <p>
                <button type="button" onClick={openCookiePreferences} className="hover:text-secondary">
                  Preferencias de cookies
                </button>
              </p>
              <p>Canal LGPD: sac1@gbltransportes.com.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} GBL Transportes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
