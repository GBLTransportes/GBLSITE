import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import StructuredData from '@/components/StructuredData'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'GBL Transportes | Transporte e Armazenagem Profissionais | Logística Brasil',
  description:
    'GBL Transportes - Soluções inteligentes em transporte rodoviário, armazenagem, cross docking e WMS. Cobertura nacional e garantia de entrega.',
  keywords: 'transportadora, logística, transporte rodoviário, armazenagem, cross docking, WMS, frete, logística brasil, transportadora brasil, distribuição',
  authors: [{ name: 'GBL Transportes' }],
  creator: 'GBL Transportes',
  publisher: 'GBL Transportes',
  
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  },

  alternates: {
    canonical: 'https://gbltransportes.com.br',
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gbltransportes.com.br',
    siteName: 'GBL Transportes',
    title: 'GBL Transportes - Soluções em Logística e Transporte',
    description: 'Transporte rodoviário, armazenagem, WMS e distribuição eficiente. Cobertura nacional com garantia de entrega.',
    images: [
      {
        url: 'https://gbltransportes.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GBL Transportes - Logística Profissional',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GBL Transportes | Logística Profissional',
    description: 'Soluções em transporte, armazenagem e distribuição',
    images: ['https://gbltransportes.com.br/twitter-image.jpg'],
    creator: '@gbltransportes',
  },

  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white">
        <StructuredData />
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
