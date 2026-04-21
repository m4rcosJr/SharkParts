import { useState, useRef } from "react";
import { motion } from "framer-motion";
import type { Product, Brand } from "@/lib/products";
import { brands } from "@/lib/products";
import { addProduct, updateProduct } from "@/lib/productStore";
import { sanitizeText, isValidUrl, isValidPrice } from "@/lib/sanitize";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

interface Props {
  product: Product | null;
  onClose: () => void;
  onSave: () => void;
}

export function ProductForm({ product, onClose, onSave }: Props) {
  const [name, setName] = useState(product?.name ?? "");
  const [brand, setBrand] = useState<Brand>(product?.brand ?? "BMW");
  const [price, setPrice] = useState(product?.price ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [imageUrl, setImageUrl] = useState(product?.image ?? "");
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(product?.image ?? null);
  const [mlUrl, setMlUrl] = useState(product?.mercadoLivreUrl ?? "");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setErrors((prev) => ({ ...prev, file: "Apenas JPG, PNG ou WEBP" }));
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({ ...prev, file: "Imagem deve ter no máximo 2MB" }));
      return;
    }

    setErrors((prev) => {
      const { file: _, ...rest } = prev;
      return rest;
    });

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setImageFile(base64);
      setImagePreview(base64);
    };
    reader.readAsDataURL(file);
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!name.trim()) errs.name = "Nome é obrigatório";
    if (name.trim().length > 120) errs.name = "Nome muito longo (máx. 120)";
    if (!description.trim()) errs.description = "Descrição é obrigatória";
    if (description.trim().length > 1000) errs.description = "Descrição muito longa (máx. 1000)";

    if (price && !isValidPrice(price)) errs.price = "Formato inválido (ex: R$ 489,90)";

    if (!imageFile && !imageUrl.trim()) errs.image = "Envie uma imagem ou insira uma URL";
    if (imageUrl.trim() && !isValidUrl(imageUrl.trim())) errs.imageUrl = "URL inválida";

    if (mlUrl.trim() && !isValidUrl(mlUrl.trim())) errs.mlUrl = "URL inválida";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const finalImage = imageFile || imageUrl.trim();
    const sanitized = {
      name: sanitizeText(name.trim()),
      brand,
      price: price ? sanitizeText(price.trim()) : undefined,
      description: sanitizeText(description.trim()),
      image: finalImage,
      mercadoLivreUrl: sanitizeText(mlUrl.trim()),
    };

    if (product) {
      updateProduct(product.id, sanitized);
    } else {
      addProduct(sanitized);
    }
    onSave();
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none";
  const errorClass = "text-xs text-destructive mt-1";

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden mb-8"
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-border/50 bg-card p-6 space-y-4"
      >
        <h2 className="font-display text-lg font-semibold text-foreground">
          {product ? "Editar Produto" : "Novo Produto"}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs text-muted-foreground">
              Nome <span className="text-destructive">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={120}
              className={inputClass}
            />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs text-muted-foreground">Marca</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value as Brand)}
              className={inputClass}
            >
              {brands.map((b) => (
                <option key={b.name} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-muted-foreground">Preço</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="R$ 0,00"
              className={inputClass}
            />
            {errors.price && <p className={errorClass}>{errors.price}</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs text-muted-foreground">Link do Mercado Livre</label>
            <input
              value={mlUrl}
              onChange={(e) => setMlUrl(e.target.value)}
              placeholder="https://..."
              className={inputClass}
            />
            {errors.mlUrl && <p className={errorClass}>{errors.mlUrl}</p>}
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs text-muted-foreground">
            Descrição <span className="text-destructive">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={1000}
            rows={3}
            className={`${inputClass} resize-none`}
          />
          <div className="flex justify-between">
            {errors.description && <p className={errorClass}>{errors.description}</p>}
            <span className="text-xs text-muted-foreground ml-auto">
              {description.length}/1000
            </span>
          </div>
        </div>

        {/* Image upload */}
        <div className="space-y-3">
          <label className="mb-1 block text-xs text-muted-foreground">
            Imagem do Produto <span className="text-destructive">*</span>
          </label>

          <div className="flex gap-4 items-start">
            <div className="flex-1">
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="w-full rounded-lg border-2 border-dashed border-border px-4 py-6 text-sm text-muted-foreground hover:border-primary hover:text-foreground transition-colors text-center"
              >
                📁 Clique para enviar imagem
                <br />
                <span className="text-xs">JPG, PNG ou WEBP (máx. 2MB)</span>
              </button>
              <input
                ref={fileRef}
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                onChange={handleFileChange}
                className="hidden"
              />
              {errors.file && <p className={errorClass}>{errors.file}</p>}
            </div>

            {imagePreview && (
              <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden border border-border">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImageFile(null);
                    setImagePreview(imageUrl || null);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                  className="absolute top-1 right-1 rounded-full bg-background/80 p-0.5 text-xs text-destructive hover:bg-background"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="mb-1 block text-xs text-muted-foreground">
              Ou insira a URL da imagem
            </label>
            <input
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
                if (!imageFile && e.target.value) setImagePreview(e.target.value);
              }}
              placeholder="https://..."
              className={inputClass}
            />
            {errors.imageUrl && <p className={errorClass}>{errors.imageUrl}</p>}
          </div>
          {errors.image && <p className={errorClass}>{errors.image}</p>}
        </div>

        <div className="flex gap-3 justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {product ? "Salvar" : "Adicionar"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
