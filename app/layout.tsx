import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import StructuredData from '@/components/StructuredData'
import CookieBanner from '@/components/CookieBanner'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'GBL Transportes | Transporte e Armazenagem Profissionais | Logistica Brasil',
  description:
    'GBL Transportes - Solucoes inteligentes em transporte rodoviario, armazenagem, cross docking e WMS. Cobertura nacional e garantia de entrega.',
  keywords: 'transportadora, logistica, transporte rodoviario, armazenagem, cross docking, WMS, frete, logistica brasil, transportadora brasil, distribuicao',
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
    title: 'GBL Transportes - Solucoes em Logistica e Transporte',
    description: 'Transporte rodoviario, armazenagem, WMS e distribuicao eficiente. Cobertura nacional com garantia de entrega.',
    images: [
      {
        url: 'https://gbltransportes.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GBL Transportes - Logistica Profissional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GBL Transportes | Logistica Profissional',
    description: 'Solucoes em transporte, armazenagem e distribuicao',
    images: ['https://gbltransportes.com.br/twitter-image.jpg'],
    creator: '@gbltransportes',
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
        <CookieBanner />
      </body>
    </html>
  )
}
