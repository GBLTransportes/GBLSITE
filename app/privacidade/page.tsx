import Link from 'next/link'

export const metadata = {
  title: 'Politica de Privacidade | GBL Transportes',
  description: 'Informacoes sobre tratamento de dados pessoais, cookies e direitos dos titulares na GBL Transportes.',
}

const updatedAt = '14 de maio de 2026'

export default function PrivacyPage() {
  return (
    <section className="bg-slate-50 px-4 py-16 text-slate-800">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <div className="mb-10 border-b border-slate-200 pb-8">
          <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-primary">
            LGPD e Privacidade
          </span>
          <h1 className="mt-4 text-4xl font-bold text-primary">Politica de Privacidade</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Esta politica explica como a GBL Transportes trata dados pessoais coletados pelo site
            para atendimento comercial, navegacao e seguranca.
          </p>
          <p className="mt-3 text-sm text-slate-500">Ultima atualizacao: {updatedAt}</p>
        </div>

        <div className="space-y-8 leading-7">
          <section>
            <h2 className="text-2xl font-semibold text-primary">1. Quem controla os dados</h2>
            <p className="mt-3 text-slate-700">
              A GBL Transportes atua como controladora dos dados pessoais tratados neste site para fins de
              contato comercial, atendimento e melhoria da experiencia digital.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">2. Dados que podemos coletar</h2>
            <p className="mt-3 text-slate-700">
              Quando voce usa o formulario de contato, podemos tratar nome, email, telefone, empresa e a
              mensagem enviada. Tambem tratamos dados tecnicos de navegacao, como endereco IP, data e hora
              das requisicoes, para seguranca e prevencao de abuso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">3. Finalidades do tratamento</h2>
            <p className="mt-3 text-slate-700">
              Os dados sao usados para responder solicitacoes, elaborar orcamentos, manter o atendimento,
              proteger a aplicacao contra uso indevido e medir desempenho do site quando houver consentimento
              para cookies analiticos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">4. Bases legais</h2>
            <p className="mt-3 text-slate-700">
              O tratamento para atendimento comercial pode ocorrer com base em procedimentos preliminares
              relacionados a contrato e em legitimo interesse, conforme o contexto da solicitacao. Cookies
              analiticos e tecnologias equivalentes sao ativados apenas com consentimento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">5. Cookies e tecnologias semelhantes</h2>
            <p className="mt-3 text-slate-700">
              O site pode utilizar cookies necessarios para funcionamento e cookies analiticos do Google
              Analytics para medir audiencia. Os cookies analiticos so sao carregados apos sua escolha no
              banner de consentimento. Voce pode revisar essa escolha pelo link de preferencias no rodape.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">6. Compartilhamento com terceiros</h2>
            <p className="mt-3 text-slate-700">
              Seus dados podem ser compartilhados com operadores e prestadores necessarios para hospedagem,
              analise de trafego e canais de comunicacao. Ao iniciar atendimento pelo WhatsApp, o tratamento
              tambem fica sujeito aos termos e politicas da Meta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">7. Retencao e seguranca</h2>
            <p className="mt-3 text-slate-700">
              Mantemos os dados pelo tempo necessario para atender a finalidade da coleta, cumprir obrigacoes
              legais e resguardar direitos. Adotamos medidas tecnicas e administrativas razoaveis para reduzir
              risco de acesso indevido, alteracao, divulgacao ou perda de dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">8. Direitos do titular</h2>
            <p className="mt-3 text-slate-700">
              Voce pode solicitar confirmacao de tratamento, acesso, correcao, anonimizacao quando cabivel,
              portabilidade, eliminacao, informacoes sobre compartilhamento e revisao das bases legais, nos
              termos da LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">9. Canal de contato</h2>
            <p className="mt-3 text-slate-700">
              Para assuntos de privacidade e exercicio de direitos, utilize o email{' '}
              <a href="mailto:sac1@gbltransportes.com.br" className="font-semibold text-primary underline underline-offset-2">
                sac1@gbltransportes.com.br
              </a>
              . Se houver encarregado formalmente designado, recomendamos publicar nome e canal direto neste
              mesmo espaco.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-2xl bg-slate-100 p-6 text-sm leading-6 text-slate-600">
          Este texto e um ajuste tecnico inicial para o site. A versao final deve ser revisada pela empresa
          para refletir fornecedores reais, prazos de retencao, base legal adotada em cada fluxo e o contato
          oficial do encarregado, se aplicavel.
        </div>

        <div className="mt-8">
          <Link href="/" className="font-semibold text-primary underline underline-offset-2">
            Voltar para a pagina inicial
          </Link>
        </div>
      </div>
    </section>
  )
}
