import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { projects } from "./projects";

export const Route = createFileRoute("/portfolio/$project")({
  head: ({ params }) => ({
    title: `${params.project?.replace(/-/g, " ") ?? "Portfólio"} — AlfaCode Tech`,
  }),
  component: PortfolioProject,
});

function PortfolioProject() {
  const params = Route.useParams();
  const project = projects.find((item) => item.slug === params.project);

  if (!project) {
    return (
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold">Projeto não encontrado</h1>
        <p className="mt-4 text-muted-foreground">O portfólio solicitado não existe ou foi movido.</p>
        <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
          <ArrowLeft className="size-4" /> Voltar ao portfólio
        </Link>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto rounded-3xl border border-border/70 bg-card p-10 shadow-lg">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-foreground transition mb-8">
          <ArrowLeft className="size-4" /> Voltar ao portfólio
        </Link>
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{project.title}</h1>
          <div className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80">{project.tag}</div>
        </div>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-8">{project.details}</p>
          <p className="text-sm">Conteúdo de portfólio detalhado para demonstrar o valor e os resultados do projeto.</p>
        </div>
      </div>
    </section>
  );
}
