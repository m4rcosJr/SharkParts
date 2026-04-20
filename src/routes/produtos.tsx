import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products, brands, type Brand } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type ProdutosSearch = { marca?: string };

export const Route = createFileRoute("/produtos")({
  validateSearch: (search: Record<string, unknown>): ProdutosSearch => ({
    marca: typeof search.marca === "string" ? search.marca : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Produtos — Shark Parts" },
      { name: "description", content: "Catálogo de peças automotivas premium para BMW, Porsche, Land Rover e Mercedes-Benz." },
      { property: "og:title", content: "Produtos — Shark Parts" },
      { property: "og:description", content: "Confira nosso catálogo de peças automotivas premium." },
    ],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  const { marca } = Route.useSearch();
  const navigate = useNavigate({ from: "/produtos" });
  const [search, setSearch] = useState("");

  const activeBrand = marca as Brand | undefined;

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchBrand = !activeBrand || p.brand === activeBrand;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      return matchBrand && matchSearch;
    });
  }, [activeBrand, search]);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-4xl font-bold text-foreground">Nossos <span className="text-primary">Produtos</span></h1>
        <p className="mt-3 text-muted-foreground">Encontre a peça ideal para o seu veículo premium</p>
      </motion.div>

      {/* Filters */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            type="text"
            placeholder="Buscar peças..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => navigate({ search: {} })}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${!activeBrand ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
          >
            Todas
          </button>
          {brands.map((b) => (
            <button
              key={b.name}
              onClick={() => navigate({ search: { marca: b.name } })}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${activeBrand === b.name ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
            >
              {b.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-20 text-center text-muted-foreground">
          <p className="text-lg">Nenhum produto encontrado</p>
          <p className="mt-2 text-sm">Tente ajustar os filtros ou a busca</p>
        </div>
      )}
    </div>
  );
}
