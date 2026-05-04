'use client'

import ServiceCard from './ServiceCard'

export default function ServicesSection() {
  const services = [
    {
      icon: 'FR',
      title: 'Frete Rodoviário',
      description: 'Transporte de cargas com cobertura nacional',
      features: [
        'Cargas fracionadas e dedicadas',
        'Coletas e entregas programadas',
        'Operações B2B e B2C',
        'Distribuição em diversas regiões',
      ],
    },
    {
      icon: 'AE',
      title: 'Armazenagem e Estoque',
      description: 'Espaços modernos com controle total de inventário',
      features: [
        'Centros de distribuição',
        'Temperatura controlada',
        'Monitoramento 24/7',
        'Sistemas automatizados',
      ],
    },
    {
      icon: 'CD',
      title: 'Cross Docking',
      description: 'Transbordo eficiente sem armazenamento prolongado',
      features: [
        'Reduz custos',
        'Agilidade na distribuição',
        'Sincronização precisa',
        'Acompanhamento contínuo',
      ],
    },
    {
      icon: 'WMS',
      title: 'Gestão Logística (WMS)',
      description: 'Sistema integrado de gerenciamento de armazém',
      features: [
        'Automação completa',
        'Controle de estoque integrado',
        'Integração com clientes',
        'Relatórios detalhados',
      ],
    },
    {
      icon: 'DE',
      title: 'Distribuição e Entregas',
      description: 'Rede de distribuição ágil e confiável',
      features: [
        'Entregas agendadas',
        'Logística urbana eficiente',
        'Última milha garantida',
        'Feedback ao cliente',
      ],
    },
  ]

  const licenseInfo = {
    title: 'Licenças e Alvarás',
    description: 'Estrutura robusta para transporte de cargas em todo o Brasil',
    features: [
      'Alvará de funcionamento',
      'Licença do Corpo de Bombeiros (AVCB)',
      'Alvará sanitário - ANVISA',
      'Licença para transporte de produtos químicos',
      'Licença ANTT',
      'Seguro RCF-DC e RCTR-C para as operações de transporte.',
    ],
  }

  return (
    <section id="servicos" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades logísticas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">{licenseInfo.title}</h3>
          <p className="text-gray-100 mb-6">{licenseInfo.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {licenseInfo.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <span className="text-2xl">+</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
