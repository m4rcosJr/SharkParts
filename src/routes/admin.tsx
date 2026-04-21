import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProducts, addProduct, updateProduct, deleteProduct } from "@/lib/productStore";
import type { Product, Brand } from "@/lib/products";
import { brands } from "@/lib/products";

const ADMIN_PASSWORD = "shark2025";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Shark Parts" }] }),
  component: AdminPage,
});

function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("shark_admin") === "true") {
      setAuthenticated(true);
    }
  }, []);

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-sm px-4 pt-40 pb-24">
        <h1 className="font-display text-2xl font-bold text-foreground text-center mb-8">Painel Admin</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (password === ADMIN_PASSWORD) {
              sessionStorage.setItem("shark_admin", "true");
              setAuthenticated(true);
            } else {
              setError("Senha incorreta");
            }
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
            className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button type="submit" className="rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return <AdminDashboard />;
}

function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const refresh = () => setProducts(getProducts());

  const handleDelete = (id: string) => {
    if (confirm("Excluir este produto?")) {
      deleteProduct(id);
      refresh();
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("shark_admin");
    window.location.reload();
  };

  return (
    <div className="mx-auto max-w-5xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">Painel <span className="text-primary">Admin</span></h1>
        <div className="flex gap-3">
          <button
            onClick={() => { setEditing(null); setShowForm(true); }}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            + Novo Produto
          </button>
          <button onClick={handleLogout} className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
            Sair
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <ProductForm
            product={editing}
            onClose={() => { setShowForm(false); setEditing(null); }}
            onSave={() => { setShowForm(false); setEditing(null); refresh(); }}
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
            <img src={p.image} alt={p.name} className="h-16 w-16 rounded-lg object-cover flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.brand} {p.price && `· ${p.price}`}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => { setEditing(p); setShowForm(true); }}
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
        <p className="mt-12 text-center text-muted-foreground">Nenhum produto cadastrado.</p>
      )}
    </div>
  );
}

function ProductForm({ product, onClose, onSave }: { product: Product | null; onClose: () => void; onSave: () => void }) {
  const [name, setName] = useState(product?.name ?? "");
  const [brand, setBrand] = useState<Brand>(product?.brand ?? "BMW");
  const [price, setPrice] = useState(product?.price ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [image, setImage] = useState(product?.image ?? "");
  const [mlUrl, setMlUrl] = useState(product?.mercadoLivreUrl ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    if (product) {
      updateProduct(product.id, { name, brand, price: price || undefined, description, image, mercadoLivreUrl: mlUrl });
    } else {
      addProduct({ name, brand, price: price || undefined, description, image, mercadoLivreUrl: mlUrl });
    }
    onSave();
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden mb-8"
    >
      <form onSubmit={handleSubmit} className="rounded-xl border border-border/50 bg-card p-6 space-y-4">
        <h2 className="font-display text-lg font-semibold text-foreground">{product ? "Editar Produto" : "Novo Produto"}</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs text-muted-foreground">Nome</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-muted-foreground">Marca</label>
            <select value={brand} onChange={(e) => setBrand(e.target.value as Brand)} className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
              {brands.map((b) => <option key={b.name} value={b.name}>{b.name}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-muted-foreground">Preço</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="R$ 0,00" className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-muted-foreground">URL da Imagem</label>
            <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs text-muted-foreground">Descrição</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={3} className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none resize-none" />
        </div>

        <div>
          <label className="mb-1 block text-xs text-muted-foreground">Link do Mercado Livre</label>
          <input value={mlUrl} onChange={(e) => setMlUrl(e.target.value)} placeholder="https://..." className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>

        <div className="flex gap-3 justify-end pt-2">
          <button type="button" onClick={onClose} className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
            Cancelar
          </button>
          <button type="submit" className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            {product ? "Salvar" : "Adicionar"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
