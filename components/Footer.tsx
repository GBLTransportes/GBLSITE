'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <h3 className="font-bold text-lg mb-4">GBL Transportes</h3>
            <p className="text-gray-400 text-sm">
              Soluções inteligentes em transporte e armazenagem para sua empresa.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#servicos" className="hover:text-secondary">Transporte Rodoviário</a></li>
              <li><a href="#servicos" className="hover:text-secondary">Armazenagem</a></li>
              <li><a href="#servicos" className="hover:text-secondary">Cross Docking</a></li>
              <li><a href="#servicos" className="hover:text-secondary">WMS</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 contato@gbltransportes.com.br</li>
              <li>📱 (11) 98204-3652</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} GBL Transportes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
