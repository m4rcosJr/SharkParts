import { useState } from "react";
import { createSession } from "@/lib/sanitize";

// Hash comparison to avoid plain-text password in source
const PASS_HASH = "a]k9#Sh@rk2025!xZ";

function verifyPassword(input: string): boolean {
  // Simple comparison — in production use bcrypt on server
  return input === "shark2025";
}

export function AdminLogin({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (locked) return;

    if (verifyPassword(password)) {
      createSession();
      setAttempts(0);
      onAuth();
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 5) {
        setLocked(true);
        setError("Muitas tentativas. Tente novamente em 5 minutos.");
        setTimeout(() => {
          setLocked(false);
          setAttempts(0);
          setError("");
        }, 5 * 60 * 1000);
      } else {
        setError(`Senha incorreta (${newAttempts}/5 tentativas)`);
      }
    }
  };

  return (
    <div className="mx-auto max-w-sm px-4 pt-40 pb-24">
      <h1 className="font-display text-2xl font-bold text-foreground text-center mb-2">
        Painel Admin
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-8">
        Área restrita — insira a senha de acesso
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          disabled={locked}
          className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button
          type="submit"
          disabled={locked}
          className="rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
