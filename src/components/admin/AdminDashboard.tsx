import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProducts, deleteProduct } from "@/lib/productStore";
import { clearSession } from "@/lib/sanitize";
import type { Product } from "@/lib/products";
import { ProductForm } from "./ProductForm";

export function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const refresh = () => setProducts(getProducts());

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      deleteProduct(id);
      refresh();
    }
  };

  const handleLogout = () => {
    clearSession();
    window.location.reload();
  };

  return (
    <div className="mx-auto max-w-5xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">
          Painel <span className="text-primary">Admin</span>
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setEditing(null);
              setShowForm(true);
            }}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            + Novo Produto
          </button>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Sair
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <ProductForm
            product={editing}
            onClose={() => {
              setShowForm(false);
              setEditing(null);
            }}
            onSave={() => {
              setShowForm(false);
              setEditing(null);
              refresh();
            }}
          />
        )}
      </AnimatePresence>

      <div className="grid gap-4">
        {products.map((p) => (
          <motion.div
            key={p.id}
            layout
            className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-16 w-16 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">{p.name}</h3>
              <p className="text-sm text-muted-foreground">
                {p.brand} {p.price && `· ${p.price}`}
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => {
                  setEditing(p);
                  setShowForm(true);
                }}
                className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="rounded-lg border border-destructive/30 px-3 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10"
              >
                Excluir
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          Nenhum produto cadastrado.
        </p>
      )}
    </div>
  );
}
