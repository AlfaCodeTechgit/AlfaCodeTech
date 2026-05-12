import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpeg";
import { SmoothTransition } from "./SmoothTransition";
import SplashCursor from "./SplashCursor";

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20AlfaCode%20Tech";

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {location.pathname === "/" && (
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#A855F7"
        />
      )}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="AlfaCode Tech" decoding="async" className="h-10 w-10 rounded-lg object-cover ring-1 ring-primary/30 group-hover:ring-primary transition" />
            <span className="font-bold tracking-tight text-lg">
              ALFACODE <span className="text-primary">TECH</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative text-sm text-muted-foreground transition hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 after:content-['']"
                activeProps={{ className: "text-primary font-semibold after:w-full" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
          >
            <MessageCircle className="size-4" /> Fale Conosco
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/50 px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm">
                {n.label}
              </Link>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
              <MessageCircle className="size-4" /> Fale Conosco
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        <SmoothTransition>
          <Outlet />
        </SmoothTransition>
      </main>

      <footer className="border-t border-border/50 bg-background/80 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <Link to="/" className="flex items-center gap-3 group">
                <img src={logo} alt="AlfaCode Tech" loading="lazy" decoding="async" className="h-10 w-10 rounded-lg object-cover ring-1 ring-primary/30 group-hover:ring-primary transition" />
                <span className="font-bold tracking-tight text-lg">
                  ALFACODE <span className="text-primary">TECH</span>
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Desenvolvemos soluções digitais sob medida para empresas que buscam crescimento, eficiência e presença de alto impacto.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Navegação</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="hover:text-primary transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Contato</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" /> Aparecida de Goiânia, GO, Brasil
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-primary" /> contatoalfacodetech@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-primary" /> +55 (62) 99547-1781
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Atendimento</h2>
              <p className="mt-5 text-sm text-muted-foreground">
                Agende uma conversa e descubra como podemos elevar seu projeto com tecnologia de ponta.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                <MessageCircle className="size-4 mr-2" /> Fale conosco
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-border/50 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} AlfaCodeTech. Todos os direitos reservados.</span>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/politica-privacidade" className="hover:text-primary transition">Política de privacidade</Link>
              <Link to="/termos-de-uso" className="hover:text-primary transition">Termos de uso</Link>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center size-14 rounded-full text-primary-foreground transition hover:scale-110"
        style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
