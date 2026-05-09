import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "../components/SmoothTransition";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — AlfaCode Tech" },
      { name: "description", content: "Entre em contato com a AlfaCode Tech." },
      { property: "og:title", content: "Contato — AlfaCode Tech" },
    ],
  }),
  component: Contato,
});

const WHATSAPP = "https://wa.me/5511999999999";

function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Vamos <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>conversar</span></h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Conte sobre seu projeto. Respondemos em até 24h.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          {[
            { icon: Mail, title: "E-mail", value: "contato@alfacodetech.com", href: "mailto:contato@alfacodetech.com" },
            { icon: Phone, title: "Telefone", value: "+55 (62) 99471781", href: "tel:+5511999999999" },
            { icon: MessageCircle, title: "WhatsApp", value: "Fale agora", href: WHATSAPP },
            { icon: MapPin, title: "Localização", value: "Aparecida de Goiânia, GO, Brasil" },
          ].map((c, index) => {
            const Tag = c.href ? "a" : "div";
            return (
              <FadeIn key={c.title} delay={index * 100} className="rounded-2xl">
                <Tag {...(c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/50 transition">
                  <div className="size-12 rounded-xl flex items-center justify-center text-primary-foreground shrink-0" style={{ background: "var(--gradient-brand)" }}>
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{c.value}</div>
                  </div>
                </Tag>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={200} className="rounded-2xl">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border/60 bg-card p-8 space-y-5"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
          <h2 className="text-2xl font-bold">Envie uma mensagem</h2>
          <div className="space-y-4">
            <input required placeholder="Nome" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <input required type="email" placeholder="E-mail" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <input placeholder="Empresa (opcional)" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <textarea required rows={5} placeholder="Conte sobre seu projeto..." className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90" style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}>
            <Send className="size-4" /> {sent ? "Mensagem enviada!" : "Enviar mensagem"}
          </button>
        </form>
      </FadeIn>
      </section>
    </>
  );
}
