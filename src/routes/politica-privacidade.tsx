import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — AlfaCode Tech" },
      { name: "description", content: "Política de privacidade da AlfaCode Tech, explicando como coletamos, usamos e protegemos seus dados." },
      { property: "og:title", content: "Política de Privacidade - AlfaCode Tech" },
      { property: "og:description", content: "Entenda como a AlfaCode Tech trata os seus dados com segurança e transparência." },
    ],
  }),
  component: PoliticaPrivacidade,
});

function PoliticaPrivacidade() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-4xl space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Política de Privacidade</p>
          <h1 className="mt-4 text-4xl font-bold">Como protegemos seus dados</h1>
          <p className="mt-4 text-base text-muted-foreground leading-7">
            Na AlfaCode Tech, o respeito à privacidade e a proteção dos seus dados são pilares do nosso trabalho. Esta política descreve as informações que coletamos, por que coletamos e como garantimos transparência e segurança durante todo o relacionamento.
          </p>
        </div>

        <div className="space-y-6 rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold">1. Quais dados coletamos</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              Coletamos apenas os dados estritamente necessários para atender solicitações de contato, orçamentos e comunicações comerciais. Isso inclui nome, e-mail, telefone e informações que você enviar voluntariamente em formulários ou mensagens.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">2. Como utilizamos esses dados</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              Utilizamos os dados para responder seu contato, enviar propostas, agendar reuniões e fornecer suporte. Também podemos usar informações para melhorar nossos serviços, desde que respeitando sua privacidade e a legislação aplicável.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">3. Compartilhamento e segurança</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              Não vendemos ou compartilhamos seus dados com terceiros para fins comerciais. Os dados são armazenados em ambientes seguros e somente pessoas autorizadas têm acesso às informações necessárias para executar nossos serviços.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">4. Seus direitos</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              Você pode solicitar a qualquer momento a atualização, correção ou exclusão de seus dados, além de retirar o consentimento para comunicações de marketing. Basta entrar em contato conosco pelo e-mail <strong>contato@alfacodetech.com</strong>.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-primary/5 p-8">
          <h2 className="text-2xl font-semibold">Compromisso AlfaCode Tech</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-7">
            Nossa prioridade é oferecer soluções digitais com confiança e segurança. Estamos comprometidos em manter práticas transparentes, conformidade com a legislação de proteção de dados e atendimento rápido para qualquer dúvida relacionada à privacidade.
          </p>
        </div>
      </div>
    </section>
  );
}
