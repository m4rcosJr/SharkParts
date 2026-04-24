import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/marcas")({
  component: MarcasRedirect,
});

function MarcasRedirect() {
  return <Navigate to="/" hash="marcas" />;
}