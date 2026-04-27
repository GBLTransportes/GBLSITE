'use client'

import Button from './Button'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texto */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Soluções Inteligentes em Transporte e Armazenagem
            </h1>
            <p className="text-lg mb-8 text-gray-100">
              Conectamos sua empresa aos melhores serviços logísticos, com armazenagem segura, distribuição eficiente e entrega garantida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="#contato"
                variant="outline"
                size="lg"
                className="text-center"
              >
                Solicitar Orçamento
              </Button>
              <Button
                href="https://wa.me/5511977633351?text=Olá%20GBL%20Transportes!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços"
                variant="primary"
                size="lg"
                className="text-center"
              >
                Fale com Consultor
              </Button>
            </div>
          </div>

          {/* Imagem/Ilustração com números */}
          <div className="animate-slide-up">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-center">
                <div className="text-4xl font-bold">500+</div>
                <p className="text-sm mt-2">Clientes Diretos e Indiretos Satisfeitos</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-center">
                <div className="text-4xl font-bold">200+</div>
                <p className="text-sm mt-2">Cidades Atendidas</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-center">
                <div className="text-4xl font-bold">20+</div>
                <p className="text-sm mt-2">Anos de Experiência</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-center">
                <div className="text-4xl font-bold">99%</div>
                <p className="text-sm mt-2">Performace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
