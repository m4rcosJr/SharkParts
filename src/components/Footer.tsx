import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="font-display text-sm font-bold text-primary-foreground">AP</span>
            </div>
            <span className="font-display text-base font-semibold text-foreground">
              AutoParts<span className="text-primary">Premium</span>
            </span>
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">
            Peças originais e importadas para veículos premium. BMW, Porsche, Land Rover e Mercedes-Benz.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/sobre" className="transition-colors hover:text-foreground">Sobre</Link>
            <Link to="/marcas" className="transition-colors hover:text-foreground">Marcas</Link>
            <Link to="/produtos" className="transition-colors hover:text-foreground">Produtos</Link>
            <Link to="/contato" className="transition-colors hover:text-foreground">Contato</Link>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AutoParts Premium. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
