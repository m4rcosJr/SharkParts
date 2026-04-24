import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  component: SobreRedirect,
});

function SobreRedirect() {
  return <Navigate to="/" hash="sobre" />;
}