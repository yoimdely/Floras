import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#calculator", label: "Калькулятор" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#process", label: "Как работаем" },
  { href: "#faq", label: "FAQ" },
  { href: "#partners", label: "Партнёрам" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night/80 py-12">
      <div className="container-inner flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-white">
          <Link href="#top" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Flora Home" width={32} height={32} className="h-8 w-8" />
            <div>
              <p className="font-semibold">Flora Home</p>
              <p className="text-xs text-white/60">Доверительное управление недвижимостью в Сочи</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/60">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} Flora Home. Все права защищены.</p>
      </div>
    </footer>
  );
}
