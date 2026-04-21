import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { brands, products } from "@/lib/products";
import { BrandCard } from "@/components/BrandCard";
import { ProductCard } from "@/components/ProductCard";

const ML_URL = "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shark Parts — Peças para Veículos de Luxo" },
      { name: "description", content: "Peças originais e importadas para BMW, Porsche, Land Rover e Mercedes-Benz. Qualidade e procedência garantidas." },
      { property: "og:title", content: "Shark Parts — Peças para Veículos de Luxo" },
      { property: "og:description", content: "Peças originais e importadas para BMW, Porsche, Land Rover e Mercedes-Benz." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-gold-muted px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
              Qualidade Premium
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Peças originais para veículos{" "}
              <span className="text-primary">premium</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              BMW, Porsche, Land Rover e Mercedes-Benz. Procedência garantida, atendimento especializado e entrega em todo o Brasil.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ver Produtos
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
              >
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground">Nossas Marcas</h2>
          <p className="mt-3 text-muted-foreground">Trabalhamos com as principais marcas premium do mercado</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BrandCard {...brand} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="border-t border-border/50 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground">Produtos em Destaque</h2>
              <p className="mt-3 text-muted-foreground">Confira algumas das nossas peças disponíveis</p>
            </div>
            <Link
              to="/produtos"
              className="hidden text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:inline-flex items-center gap-1"
            >
              Ver todos →
            </Link>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-gold-muted p-8 text-center sm:p-12"
        >
          <h2 className="font-display text-3xl font-bold text-foreground">Faça seu pedido agora</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Entre em contato pelo WhatsApp ou visite nossa loja no Mercado Livre
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5519988107422"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.55_0.17_145)] px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar no WhatsApp
            </a>
            <a
              href={ML_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver loja no Mercado Livre
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
