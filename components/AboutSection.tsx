'use client'

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">Sobre a GBL Transportes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mais de 20 anos de excelência em logística e transporte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-primary mb-4">Nossa História</h3>
            <p className="text-gray-700 mb-4">
              A GBL é uma empresa fundada em 2003, especializada em transporte rodoviário e armazenagem. Desde o início de suas operações, possui experiência no transporte de medicamentos, atuando com rigor nos padrões de segurança e qualidade exigidos pelo setor. Ao longo dos anos, consolidou sua presença no mercado ao oferecer soluções logísticas eficientes, confiáveis e adaptadas às necessidades de seus clientes, sempre com foco na excelência e na melhoria contínua.
            </p>
            <p className="text-gray-700">
              Com frota moderna, equipe qualificada e tecnologia de ponta, garantimos excelência em cada entrega.
            </p>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">Nossos Diferenciais</h3>
            <div className="space-y-4">
              {[
                { icon: 'FP', title: 'Frota Própria', desc: 'Veículos de última geração e bem mantidos' },
                { icon: 'AG', title: 'Agilidade', desc: 'Resposta rápida e soluções personalizadas' },
                { icon: 'SG', title: 'Segurança', desc: 'Seguros abrangentes e equipe treinada' },
                { icon: 'TI', title: 'Tecnologia', desc: 'Sistema TMS integrado e automatizado' },
                { icon: 'ES', title: 'Sustentabilidade', desc: 'Compromisso com o meio ambiente' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="text-lg font-bold text-secondary min-w-8">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
