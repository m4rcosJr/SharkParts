import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  Truck,
  Award,
  PackageSearch,
  Headphones,
  Mail,
  Phone,
  MessageCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-warehouse.jpg";
import brakes from "@/assets/service-brakes.jpg";
import engine from "@/assets/service-engine.jpg";
import suspension from "@/assets/service-suspension.jpg";
import electronics from "@/assets/service-electronics.jpg";
import bmw from "@/assets/brand-bmw.png";
import porsche from "@/assets/brand-porsche.png";
import landrover from "@/assets/brand-landrover.png";
import mercedes from "@/assets/brand-mercedes.png";
import volvo from "@/assets/brand-volvo.png";
import audi from "@/assets/brand-audi.png";

const WHATSAPP = "https://wa.me/5519988107422";

const services = [
  { img: brakes, title: "Sistema de Freios", desc: "Discos, pastilhas e pinças de alta performance para veículos premium." },
  { img: engine, title: "Motor", desc: "Componentes originais para o coração do seu carro importado." },
  { img: suspension, title: "Suspensão", desc: "Amortecedores, molas e kits completos com procedência garantida." },
  { img: electronics, title: "Eletrônicos", desc: "Módulos, sensores e centrais eletrônicas testadas e certificadas." },
];

const brands = [
  { name: "BMW", logo: bmw },
  { name: "Porsche", logo: porsche },
  { name: "Land Rover", logo: landrover },
  { name: "Mercedes-Benz", logo: mercedes },
  { name: "Volvo", logo: volvo },
  { name: "Audi", logo: audi },
];

const differentials = [
  { icon: Truck, title: "Entrega Nacional", desc: "Enviamos para todo o Brasil com rapidez e segurança." },
  { icon: Award, title: "Especialistas Premium", desc: "Mais de uma década com foco em carros importados." },
  { icon: PackageSearch, title: "Peças Sob Encomenda", desc: "Localizamos qualquer peça, mesmo as mais raras." },
  { icon: Headphones, title: "Atendimento Rápido", desc: "Suporte ágil via WhatsApp com consultores especializados." },
];

const testimonials = [
  { name: "Ricardo Almeida", role: "Proprietário BMW M5", text: "Encontrei uma peça rara em poucos dias. Atendimento impecável e entrega antes do prazo." },
  { name: "Patrícia Santos", role: "Proprietária Porsche Cayenne", text: "Qualidade original, preço justo e profissionalismo do começo ao fim. Recomendo." },
  { name: "Marcelo Vieira", role: "Proprietário Mercedes GLE", text: "A Shark Parts virou minha referência. Confiança total no que compro." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shark Parts — Peças Premium para Importados" },
      { name: "description", content: "Peças originais e importadas para BMW, Porsche, Land Rover, Mercedes-Benz, Volvo e Audi. Procedência garantida e entrega nacional." },
      { property: "og:title", content: "Shark Parts — Peças Premium para Importados" },
      { property: "og:description", content: "Peças originais para BMW, Porsche, Land Rover, Mercedes-Benz, Volvo e Audi." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) return;
    const text = `Olá! Sou ${form.nome}.%0AEmail: ${form.email}%0AWhatsApp: ${form.whatsapp}%0A%0A${form.mensagem}`;
    window.open(`https://wa.me/5519988107422?text=${text}`, "_blank");
    setSent(true);
    setForm({ nome: "", email: "", whatsapp: "", mensagem: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div>
      {/* HERO */}
      <section id="inicio" className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="mb-5 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Procedência Garantida
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Peças <span className="text-primary">premium</span> para veículos importados
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Especialistas em BMW, Porsche, Land Rover, Mercedes-Benz, Volvo e Audi. Atendimento personalizado e entrega para todo o Brasil.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)] transition-all hover:scale-[1.02] hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                Falar com especialista
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-accent"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS / PEÇAS */}
      <section id="servicos" className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Catálogo</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Nossas Peças</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Componentes originais e de alta performance para todas as áreas do seu veículo.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_var(--primary)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section id="marcas" className="border-t border-border/50 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Especialidades</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Marcas que Trabalhamos</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Foco total em veículos premium europeus.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {brands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-background/60 p-8 transition-all hover:border-primary/40 hover:bg-background"
              >
                <div className="flex h-28 w-28 items-center justify-center">
                  <img
                    src={b.logo}
                    alt={`Logo ${b.name}`}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="mt-5 font-display text-base font-semibold text-foreground">{b.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Por que nós</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Nossos Diferenciais</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border/60 bg-card p-7 transition-all hover:border-primary/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-t border-border/50 bg-card/30 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-border/60"
          >
            <img src={aboutImg} alt="Estoque Shark Parts" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Sobre nós</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Referência em peças <span className="text-primary">premium</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A Shark Parts nasceu da paixão por carros importados. Reunimos uma equipe de especialistas e parceiros internacionais para oferecer peças originais e de alta performance com a procedência que o seu veículo merece.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Trabalhamos com BMW, Porsche, Land Rover, Mercedes-Benz, Volvo e Audi, entregando para todo o Brasil com agilidade e atendimento dedicado.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="font-display text-3xl font-bold text-primary">10+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Anos no mercado</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">5k+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Clientes</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">100%</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Procedência</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Clientes</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">O que dizem sobre nós</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border/60 bg-card p-7"
              >
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-foreground/90">"{t.text}"</p>
                <div className="mt-6 border-t border-border/60 pt-4">
                  <div className="font-display font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative border-t border-border/50 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Fale conosco</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Pronto para encontrar sua peça?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Entre em contato e receba um atendimento personalizado em minutos.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Info */}
            <div className="space-y-4">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">+55 19 98810-7422</div>
                  <div className="mt-1 text-xs text-primary">Resposta em minutos →</div>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">Telefone</div>
                  <div className="text-sm text-muted-foreground">+55 19 98810-7422</div>
                </div>
              </div>

              <a href="mailto:sharkparts25@gmail.com" className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">E-mail</div>
                  <div className="text-sm text-muted-foreground">sharkparts25@gmail.com</div>
                </div>
              </a>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/60 bg-card p-7"
            >
              <div className="grid gap-4">
                <div>
                  <label htmlFor="nome" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Nome *</label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">E-mail *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">WhatsApp</label>
                    <input
                      id="whatsapp"
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mensagem" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Mensagem *</label>
                  <textarea
                    id="mensagem"
                    required
                    rows={4}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Enviar via WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </button>
                {sent && <p className="text-center text-sm text-primary">✓ Redirecionando para o WhatsApp...</p>}
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
