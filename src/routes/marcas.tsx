import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { brands } from "@/lib/products";
import { BrandCard } from "@/components/BrandCard";

export const Route = createFileRoute("/marcas")({
  head: () => ({
    meta: [
      { title: "Marcas — Shark Parts" },
      { name: "description", content: "Peças para BMW, Porsche, Land Rover e Mercedes-Benz." },
      { property: "og:title", content: "Marcas — Shark Parts" },
      { property: "og:description", content: "Peças para as principais marcas premium." },
    ],
  }),
  component: MarcasPage,
});

function MarcasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h1 className="font-display text-4xl font-bold text-foreground">Nossas <span className="text-primary">Marcas</span></h1>
        <p className="mt-4 text-muted-foreground">Clique em uma marca para ver os produtos disponíveis</p>
      </motion.div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
    </div>
  );
}
