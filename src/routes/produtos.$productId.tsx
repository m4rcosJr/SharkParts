import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/produtos/$productId")({
  component: ProdutoRedirect,
});

function ProdutoRedirect() {
  return <Navigate to="/" hash="servicos" />;
}