import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

interface BrandCardProps {
  name: string;
  logo: string;
  description: string;
}

export function BrandCard({ name, logo, description }: BrandCardProps) {
  return (
    <Link to="/produtos" search={{ marca: name }}>
      <motion.div
        className="group flex flex-col items-center gap-4 rounded-xl border border-border/50 bg-card p-8 text-center transition-colors hover:border-primary/30"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary p-3">
          <img src={logo} alt={name} className="h-full w-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" loading="lazy" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </motion.div>
    </Link>
  );
}
