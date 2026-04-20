import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Shark Parts" },
      { name: "description", content: "Conheça a Shark Parts. Especialistas em peças para BMW, Porsche, Land Rover e Mercedes-Benz." },
      { property: "og:title", content: "Sobre — Shark Parts" },
      { property: "og:description", content: "Especialistas em peças para veículos premium." },
    ],
  }),
  component: SobrePage,
});

const values = [
  { title: "Qualidade", desc: "Apenas peças originais e importadas com garantia de procedência.", icon: "✓" },
  { title: "Especialização", desc: "Foco exclusivo em BMW, Porsche, Land Rover e Mercedes-Benz.", icon: "★" },
  { title: "Confiança", desc: "Anos de experiência no mercado automotivo premium.", icon: "♦" },
  { title: "Atendimento", desc: "Suporte técnico personalizado para cada cliente.", icon: "◆" },
];

function SobrePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="font-display text-4xl font-bold text-foreground">Sobre a <span className="text-primary">Shark Parts</span></h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Somos especializados na venda de peças originais e importadas para veículos premium. 
          Nosso compromisso é oferecer qualidade, procedência e atendimento técnico especializado 
          para proprietários de BMW, Porsche, Land Rover e Mercedes-Benz.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Cada peça do nosso catálogo passa por rigoroso controle de qualidade, garantindo 
          performance e durabilidade para o seu veículo.
        </p>
      </motion.div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border/50 bg-card p-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-muted text-xl text-primary">
              {v.icon}
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
