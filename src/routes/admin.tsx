import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { isSessionValid } from "@/lib/sanitize";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Shark Parts" }] }),
  component: AdminPage,
});

function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (isSessionValid()) {
      setAuthenticated(true);
    }
  }, []);

  if (!authenticated) {
    return <AdminLogin onAuth={() => setAuthenticated(true)} />;
  }

  return <AdminDashboard />;
}
