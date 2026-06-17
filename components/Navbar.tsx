"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { label: "Deacon Construction", href: "/construction" },
  { label: "Deacon Interior", href: "/interior" },
];

const portfolio = [
  { label: "Construction Projects", href: "/portfolio/construction" },
  { label: "Interior Projects", href: "/portfolio/interior" },
];

function Chevron({ open }: { open?: boolean }) {
  return (
    <span
      className={`ml-2 inline-block text-[10px] transition ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      ▼
    </span>
  );
}

function DesktopDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="group relative">
      <button className="flex h-20 items-center text-sm font-semibold text-neutral-800 transition hover:text-gold">
        {label}
        <Chevron />
      </button>
      <div className="invisible absolute left-0 top-full w-64 translate-y-2 border border-neutral-200 bg-white opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block border-b border-neutral-100 px-5 py-4 text-sm font-semibold text-neutral-700 transition last:border-b-0 hover:bg-neutral-950 hover:text-champagne"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileGroup({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left text-base font-bold text-neutral-900"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {label}
        <Chevron open={open} />
      </button>
      {open ? (
        <div className="pb-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 pl-4 text-sm font-semibold text-neutral-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white text-neutral-950 shadow-sm">
      <nav className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Deacon Pro home">
          <span className="grid h-11 w-11 place-items-center bg-neutral-950 text-[13px] font-black tracking-[0.12em] text-champagne">
            DP
          </span>
          <span className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.24em]">
              Deacon Pro
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold">
              Construction & Interior
            </span>
          </span>
        </Link>

        <div className="hidden h-full items-center gap-7 lg:flex">
          <Link className="text-sm font-semibold transition hover:text-gold" href="/">
            Home
          </Link>
          <Link className="text-sm font-semibold transition hover:text-gold" href="/#about">
            About Us
          </Link>
          <DesktopDropdown label="Services" items={services} />
          <DesktopDropdown label="Portfolio" items={portfolio} />
          <Link className="text-sm font-semibold transition hover:text-gold" href="/#process">
            Process
          </Link>
          <Link className="text-sm font-semibold transition hover:text-gold" href="/#insight">
            Insight
          </Link>
          <Link className="text-sm font-semibold transition hover:text-gold" href="/#contact">
            Contact
          </Link>
        </div>

        <Link
          href="/#contact"
          className="hidden bg-gold px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-neutral-950 md:inline-flex lg:ml-1"
        >
          Get in Touch
        </Link>

        <button
          className="grid h-11 w-11 place-items-center border border-neutral-300 text-xl font-black lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
          aria-label="Toggle navigation"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <div className="container-x py-3">
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/">
              Home
            </Link>
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/#about">
              About Us
            </Link>
            <MobileGroup label="Services" items={services} />
            <MobileGroup label="Portfolio" items={portfolio} />
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/#process">
              Process
            </Link>
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/#insight">
              Insight
            </Link>
            <Link className="block py-4 text-base font-bold text-neutral-900" href="/#contact">
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
