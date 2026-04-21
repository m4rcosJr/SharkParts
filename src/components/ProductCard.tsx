import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link
        to="/produtos/$productId"
        params={{ productId: product.id }}
        className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-colors hover:border-primary/30"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="rounded-md bg-primary/90 px-2.5 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
              {product.brand}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          <div className="mt-auto flex items-center justify-between pt-3">
            {product.price && (
              <span className="font-display text-lg font-bold text-primary">{product.price}</span>
            )}
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
              Ver detalhes →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
