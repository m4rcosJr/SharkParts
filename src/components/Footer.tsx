import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";

const ML_URL = "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1";
const INSTAGRAM_URL = "https://www.instagram.com/sharkparts__/";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Shark Parts" className="h-8 w-8 rounded-md object-cover" />
            <span className="font-display text-base font-semibold text-foreground">
              Shark<span className="text-primary">Parts</span>
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
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href={ML_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Mercado Livre">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            </a>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shark Parts. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
