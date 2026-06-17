import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
      <nav className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="Deacon Pro home">
          <span className="grid h-11 w-11 place-items-center border border-champagne/70 bg-white text-[13px] font-black tracking-[0.12em] text-ink">
            DP
          </span>
          <span className="leading-none">
            <span className="block text-sm font-semibold uppercase tracking-[0.32em] text-white">
              Deacon
            </span>
            <span className="mt-1 block text-xs font-medium uppercase tracking-[0.42em] text-champagne">
              Pro
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-white/72 transition hover:text-champagne"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden border border-champagne bg-champagne px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-white md:inline-flex"
        >
          Get in Touch
        </Link>

        <Link
          href="/#contact"
          className="border border-white/18 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-champagne hover:text-champagne md:hidden"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
