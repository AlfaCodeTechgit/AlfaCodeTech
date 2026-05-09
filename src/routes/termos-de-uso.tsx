import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — AlfaCode Tech" },
      { name: "description", content: "Termos de uso da AlfaCode Tech, incluindo condições de serviço, responsabilidade e utilização do website." },
      { property: "og:title", content: "Termos de Uso - AlfaCode Tech" },
      { property: "og:description", content: "Conheça as condições de uso dos serviços e do site AlfaCode Tech." },
    ],
  }),
  component: TermosDeUso,
});

function TermosDeUso() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-4xl space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Termos de Uso</p>
          <h1 className="mt-4 text-4xl font-bold">Condições para usar nosso site e serviços</h1>
          <p className="mt-4 text-base text-muted-foreground leading-7">
            Estes termos regem o uso do site e os serviços prestados pela AlfaCode Tech. Ao acessar nosso website ou contatar nossa equipe, você concorda com as condições listadas abaixo.
          </p>
        </div>

        <div className="space-y-6 rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold">1. Uso do site</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              O acesso ao website da AlfaCode Tech é fornecido para consulta de serviços, informações institucionais e contato. Você concorda em utilizar o site de forma ética, sem violar direitos autorais, privacidade ou normativa aplicável.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">2. Conteúdo e serviços</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              As informações sobre serviços, projetos e cases são fornecidas como referência. Propostas comerciais são elaboradas individualmente e podem variar de acordo com escopo, prazo e condições definidas em contrato.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">3. Responsabilidade</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              A AlfaCode Tech busca máxima qualidade nas informações publicadas, mas não se responsabiliza por erros, omissões ou danos decorrentes do uso indevido do site. Para contratualização de serviços, prevalecem as condições acolhidas em propostas e contratos formais.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">4. Contato e suporte</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              Para dúvidas sobre estes termos ou sobre qualquer aspecto do nosso serviço, entre em contato pelo e-mail <strong>contato@alfacodetech.com</strong> ou via WhatsApp. Nossa equipe responde com agilidade e transparência.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-primary/5 p-8">
          <h2 className="text-2xl font-semibold">Atualizações</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-7">
            Reservamo-nos o direito de atualizar estes termos a qualquer momento. Sempre que houver mudanças relevantes, elas serão publicadas neste mesmo endereço para consulta.
          </p>
        </div>
      </div>
    </section>
  );
}
