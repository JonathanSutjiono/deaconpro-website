import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-12 text-white">
      <div className="container-x grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-black uppercase tracking-[0.28em]">
            Deacon <span className="text-champagne">Pro</span>
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            Integrated construction and interior solution provider for premium
            residential, commercial, and hospitality spaces.
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-champagne">
            Services
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/68">
            <Link href="/construction" className="transition hover:text-champagne">
              Deacon Construction
            </Link>
            <Link href="/interior" className="transition hover:text-champagne">
              Deacon Interior
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-champagne">
            Portfolio
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/68">
            <Link href="/portfolio/construction" className="transition hover:text-champagne">
              Construction Projects
            </Link>
            <Link href="/portfolio/interior" className="transition hover:text-champagne">
              Interior Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="container-x mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/42">
        © 2026 Deacon Pro. All rights reserved.
      </div>
    </footer>
  );
}
