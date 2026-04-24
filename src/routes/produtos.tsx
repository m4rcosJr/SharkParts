import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/produtos")({
  component: ProdutosRedirect,
});

function ProdutosRedirect() {
  return <Navigate to="/" hash="servicos" />;
}