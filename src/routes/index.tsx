import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Cloud, Smartphone, Sparkles, Cpu, Zap } from "lucide-react";
import logo from "../assets/logo-home.png";
import { FadeIn, SlideTransition } from "../components/SmoothTransition";
import ElectricBorder from "../components/ElectricBorder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AlfaCode Tech — Soluções digitais sob medida" },
      { name: "description", content: "Desenvolvimento de software, apps e plataformas web. Tecnologia que acelera o seu negócio." },
      { property: "og:title", content: "AlfaCode Tech" },
      { property: "og:description", content: "Soluções digitais sob medida para o seu negócio." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Code2, title: "Desenvolvimento Web", desc: "Sites e plataformas modernas, rápidas e escaláveis." },
  { icon: Smartphone, title: "Apps Mobile", desc: "Aplicativos nativos e híbridos para iOS e Android." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Infraestrutura escalável na nuvem com automação completa." },
  { icon: Cpu, title: "Inteligência Artificial", desc: "Integrações com IA para automatizar processos." },
];



function Index() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-6 py-16 md:py-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Logo side */}
            <SlideTransition direction="left" className="flex justify-center md:justify-start order-2 md:order-1">
              <ElectricBorder color="#5227FF" speed={1} chaos={0.12} borderRadius={24}>
                <img
                  src={logo}
                  alt="AlfaCode Tech Logo"
                  decoding="async"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                />
              </ElectricBorder>
            </SlideTransition>

            {/* Content side */}
            <FadeIn className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-8">
                <Sparkles className="size-3" /> Tecnologia que impulsiona resultados
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Código que <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>transforma</span> negócios
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
                Da ideia ao deploy: criamos soluções digitais sob medida com design impecável, performance e escalabilidade.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contato" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90" style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}>
                  Iniciar projeto <ArrowRight className="size-4" />
                </Link>
                <Link to="/servicos" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border border-border hover:border-primary hover:text-primary transition">
                  Ver serviços
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="absolute -right-40 -top-20 size-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { num: "★", label: "Projetos entregues" },
            { num: "★", label: "Clientes satisfeitos" },
            { num: "5★", label: "Avaliação média" },
          ].map((s, index) => (
            <FadeIn key={s.label} delay={index * 100} className="rounded-2xl border border-border/60 bg-card p-8 text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>{s.num}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">O que fazemos</h2>
          <p className="mt-4 text-muted-foreground">Soluções completas, do design ao deploy.</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, index) => (
            <SlideTransition key={s.title} delay={index * 100} direction="up" className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/50 transition" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="size-12 rounded-xl flex items-center justify-center mb-5 text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <s.icon className="size-6" />
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </SlideTransition>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <SlideTransition direction="up">
          <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden" style={{ background: "var(--gradient-brand)" }}>
            <Zap className="size-10 mx-auto text-primary-foreground mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Pronto para acelerar seu negócio?</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Vamos conversar sobre o seu projeto.</p>
            <Link to="/contato" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold text-foreground hover:bg-background/90 transition">
              Fale com a gente <ArrowRight className="size-4" />
            </Link>
          </div>
        </SlideTransition>
      </section>
    </>
  );
}
