import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";
import { FadeIn } from "../components/SmoothTransition";
import ElectricBorder from "../components/ElectricBorder";
import logo from "../assets/logo-home.png";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — AlfaCodeTech" },
      { name: "description", content: "Conheça a AlfaCodeTech: missão, visão e valores." },
      { property: "og:title", content: "Sobre — AlfaCodeTech" },
    ],
  }),
  component: Sobre,
});


function Sobre() {
  return (
    <>
      <section className="relative py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Sobre a <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>AlfaCodeTech</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Somos uma equipe apaixonada por tecnologia que transforma ideias em produtos digitais de alto impacto.
            Combinamos design, engenharia e estratégia para entregar soluções que escalam.
          </p>
          <div className="mt-12 flex flex-col items-center">
            <ElectricBorder color="#5227FF" speed={1} chaos={0.12} borderRadius={16}>
              <img
                src={logo}
                alt="AlfaCode Tech Logo"
                loading="lazy"
                decoding="async"
                className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </ElectricBorder>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Missão", text: "Acelerar o crescimento de negócios por meio de tecnologia bem feita." },
          { icon: Eye, title: "Visão", text: "Ser referência em desenvolvimento de software sob medida na América Latina." },
          { icon: Heart, title: "Valores", text: "Excelência técnica, transparência, inovação e parceria de longo prazo." },
        ].map((v, index) => (
          <FadeIn key={v.title} delay={index * 100} className="rounded-2xl">
            <div className="rounded-2xl border border-border/60 bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="size-12 rounded-xl flex items-center justify-center mb-5 text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <v.icon className="size-6" />
              </div>
              <h3 className="text-xl font-semibold">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.text}</p>
            </div>
          </FadeIn>
        ))}
      </section>

      <section className="container mx-auto px-6 pb-24">
        <FadeIn delay={300} className="rounded-3xl">
          <div className="rounded-3xl border border-border/60 bg-card p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold">Nossa história</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A AlfaCodeTech nasceu da vontade de unir engenharia de software com visão estratégica de negócio.
              Desde então, ajudamos startups, PMEs e grandes empresas a construírem produtos digitais que conquistam usuários
              e geram resultado. Cada projeto é único, e tratamos cada cliente como parceiro.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
