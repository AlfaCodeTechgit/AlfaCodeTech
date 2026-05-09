import { createFileRoute } from "@tanstack/react-router";
import { Code2, Cloud, Smartphone, Cpu, Palette, ShieldCheck, Database, LineChart } from "lucide-react";
import { FadeIn } from "../components/SmoothTransition";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — AlfaCode Tech" },
      { name: "description", content: "Desenvolvimento web, mobile, cloud, IA, design e mais." },
      { property: "og:title", content: "Serviços — AlfaCode Tech" },
    ],
  }),
  component: Servicos,
});

const services = [
  { icon: Code2, title: "Desenvolvimento Web", desc: "Sites institucionais, e-commerces e SaaS com tecnologias modernas como React, Next.js." },
  { icon: Smartphone, title: "Aplicativos Mobile", desc: "Apps nativos e multiplataforma para iOS e Android com excelente UX." },
  { icon: Cpu, title: "Inteligência Artificial", desc: "Chatbots, automações e integrações com modelos de linguagem." },
  { icon: Palette, title: "UI/UX Design", desc: "Interfaces bonitas, intuitivas e centradas no usuário." },
  { icon: Database, title: "APIs & Integrações", desc: "APIs REST, GraphQL." },
  { icon: ShieldCheck, title: "Segurança", desc: "Auditoria, hardening e boas práticas de proteção de dados." },
  { icon: LineChart, title: "Consultoria Tech", desc: "Arquitetura, escolha de stack e roadmap de produto." },
];

function Servicos() {
  return (
    <>
      <section className="relative py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Nossos <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>Serviços</span></h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Soluções completas para empresas que querem escalar com tecnologia.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, index) => (
            <FadeIn key={s.title} delay={index * 100} className="rounded-2xl h-full">
              <div className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="size-12 rounded-xl flex items-center justify-center mb-5 text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
                <p className="mt-auto text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
