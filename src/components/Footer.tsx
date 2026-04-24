import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/sharkparts__/";
const WHATSAPP_URL = "https://wa.me/5519988107422";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Shark Parts" className="h-9 w-9 rounded-md object-cover" />
              <span className="font-display text-lg font-semibold text-foreground">
                Shark<span className="text-primary">Parts</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Peças premium para veículos importados com procedência garantida. BMW, Porsche, Land Rover e Mercedes-Benz.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#inicio" className="transition-colors hover:text-foreground">Início</a></li>
              <li><a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a></li>
              <li><a href="#servicos" className="transition-colors hover:text-foreground">Peças</a></li>
              <li><a href="#marcas" className="transition-colors hover:text-foreground">Marcas</a></li>
              <li><a href="#contato" className="transition-colors hover:text-foreground">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 sharkparts25@gmail.com</li>
              <li>📱 +55 19 98810-7422</li>
              <li className="pt-2">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                  Falar no WhatsApp →
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                  Instagram @sharkparts__
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Shark Parts. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
