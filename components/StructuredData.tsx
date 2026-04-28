'use client'

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TransportBusiness'],
    '@id': 'https://gbltransportes.com.br',
    name: 'GBL Transportes',
    url: 'https://gbltransportes.com.br',
    image: 'https://gbltransportes.com.br/images/LogotipoGBL.png',
    description: 'GBL Transportes - Soluções inteligentes em transporte rodoviário, armazenagem, cross docking e WMS. Cobertura nacional e garantia de entrega.',
    telephone: '+5511982043652',
    email: 'contato@gbltransportes.com.br',
    
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Exemplo, 123',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01310-100',
      addressCountry: 'BR',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5505',
      longitude: '-46.6333',
    },

    areaServed: {
      '@type': 'State',
      name: 'Brazil',
    },

    knowsAbout: [
      'Transporte Rodoviário',
      'Armazenagem',
      'Cross Docking',
      'WMS',
      'Logística',
    ],

    priceRange: 'R$$$',
    
    contactPoint: {
      '@type': 'ContactPoint',
      contact_type: 'Customer Service',
      area_served: 'BR',
      available_language: 'pt-BR',
      telephone: '+5511982043652',
      email: 'contato@gbltransportes.com.br',
    },

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '156',
      bestRating: '5',
      worstRating: '1',
    },

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Logística',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Transporte Rodoviário',
          description: 'Transporte profissional de cargas com frota moderna',
        },
        {
          '@type': 'Offer',
          name: 'Armazenagem e Estoque',
          description: 'Centros de distribuição com temperatura controlada',
        },
        {
          '@type': 'Offer',
          name: 'Cross Docking',
          description: 'Transbordo eficiente de mercadorias',
        },
        {
          '@type': 'Offer',
          name: 'WMS - Gestão de Armazém',
          description: 'Sistema integrado de controle de estoque',
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Qual é a área de cobertura da GBL Transportes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Temos cobertura nacional em mais de 50 cidades brasileiras.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quais são os serviços de armazenagem?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Oferecemos armazenagem com temperatura controlada, cross docking, e sistema WMS integrado para controle completo do estoque.',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
