'use client'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511982043652?text=Olá%20GBL%20Transportes!%20Gostaria%20de%20informações%20sobre%20seus%20serviços"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl z-40 animate-bounce"
      title="Fale com a gente no WhatsApp"
      aria-label="Fale com a gente no WhatsApp"
    >
      <img
        src="/images/whatsapp-symbol-white.png"
        alt=""
        aria-hidden="true"
        className="h-11 w-11 object-contain"
      />
    </a>
  )
}
