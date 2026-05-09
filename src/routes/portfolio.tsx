import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "../components/SmoothTransition";
import { projects, colors } from "./portfolio/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — AlfaCode Tech" },
      { name: "description", content: "Conheça alguns dos nossos projetos." },
      { property: "og:title", content: "Portfólio — AlfaCode Tech" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <section className="relative py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Nosso <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>Portfólio</span></h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Projetos que entregamos com paixão e precisão.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100} className="rounded-2xl">
              <a href={`/portfolio/${p.slug}`} className="group block rounded-2xl">
                <article className="group rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-primary/50 transition" style={{ boxShadow: "var(--shadow-card)" }}>
                  <div className={`h-48 bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center`}>
                    <span className="text-primary-foreground font-bold text-2xl opacity-30">{p.title.split(" ")[0]}</span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-primary font-semibold mb-2">{p.tag}</div>
                    <h3 className="font-semibold text-lg flex items-center justify-between">
                      {p.title}
                      <ExternalLink className="size-4 opacity-0 group-hover:opacity-100 transition" />
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </article>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
