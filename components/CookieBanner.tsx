'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const CONSENT_KEY = 'gbl_cookie_consent'
const GA_ID = 'G-XYGSLFP301'

type ConsentState = 'accepted' | 'rejected' | null

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_KEY)
    if (savedConsent === 'accepted' || savedConsent === 'rejected') {
      setConsent(savedConsent)
    }

    setHydrated(true)

    const handlePreferencesReset = () => {
      window.localStorage.removeItem(CONSENT_KEY)
      setConsent(null)
    }

    window.addEventListener('gbl:cookie-preferences', handlePreferencesReset)

    return () => {
      window.removeEventListener('gbl:cookie-preferences', handlePreferencesReset)
    }
  }, [])

  const updateConsent = (value: Exclude<ConsentState, null>) => {
    window.localStorage.setItem(CONSENT_KEY, value)
    setConsent(value)
  }

  const shouldLoadAnalytics = hydrated && consent === 'accepted'
  const shouldShowBanner = hydrated && consent === null

  return (
    <>
      {shouldLoadAnalytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {shouldShowBanner && (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-primary-dark bg-white/95 shadow-2xl backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 text-sm text-gray-700 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl leading-6">
              Usamos cookies e tecnologias semelhantes para medir audiencia e melhorar a navegacao.
              Os cookies analiticos so sao ativados com sua autorizacao. Leia a nossa{' '}
              <Link href="/privacidade" className="font-semibold text-primary underline underline-offset-2">
                Politica de Privacidade
              </Link>
              .
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => updateConsent('rejected')}
                className="rounded-md border border-primary px-4 py-2 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Recusar analiticos
              </button>
              <button
                type="button"
                onClick={() => updateConsent('accepted')}
                className="rounded-md bg-primary px-4 py-2 font-semibold text-white transition hover:bg-primary-dark"
              >
                Aceitar cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
