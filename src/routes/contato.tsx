import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/contato")({
  component: ContatoRedirect,
});

function ContatoRedirect() {
  return <Navigate to="/" hash="contato" />;
}