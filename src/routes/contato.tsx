import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Smartphone, Mail, Package } from "lucide-react";

const ML_URL = "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1";
const INSTAGRAM_URL = "https://www.instagram.com/sharkparts__/";
const WA_URL = "https://wa.me/5519988107422";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Shark Parts" },
      { name: "description", content: "Entre em contato com a Shark Parts. WhatsApp, Instagram e Mercado Livre." },
      { property: "og:title", content: "Contato — Shark Parts" },
      { property: "og:description", content: "Faça seu pedido pelo WhatsApp ou Mercado Livre." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h1 className="font-display text-4xl font-bold text-foreground">Faça seu <span className="text-primary">Pedido</span></h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Entre em contato conosco pelo WhatsApp para atendimento personalizado, siga-nos no Instagram ou visite nossa loja no Mercado Livre.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[oklch(0.55_0.17_145)] px-8 py-4 text-base font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Falar no WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[oklch(0.55_0.25_330)] via-[oklch(0.55_0.25_25)] to-[oklch(0.70_0.20_60)] px-8 py-4 text-base font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Seguir no Instagram
          </a>
          <a
            href={ML_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Ver loja no Mercado Livre
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { title: "WhatsApp", desc: "(19) 98810-7422", icon: Smartphone },
            { title: "Email", desc: "sharkparts25@gmail.com", icon: Mail },
            { title: "Entrega", desc: "Todo o Brasil", icon: Package },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border/50 bg-card p-6 text-center">
              <div className="flex justify-center">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-3 font-display font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
