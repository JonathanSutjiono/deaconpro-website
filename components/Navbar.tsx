"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/data/company";
import { portfolioNavigation } from "@/data/portfolio";
import { serviceNavigation } from "@/data/services";

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
      <button className="flex h-20 items-center whitespace-nowrap text-sm font-semibold text-neutral-800 transition hover:text-gold">
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
      <nav className="mx-auto flex h-20 w-full max-w-[1440px] flex-nowrap items-center justify-between gap-4 px-4 sm:px-6 xl:gap-5 xl:px-8">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3"
          aria-label="Deacon Pro home"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center bg-neutral-950 text-[12px] font-black tracking-[0.12em] text-champagne xl:h-11 xl:w-11 xl:text-[13px]">
            DP
          </span>
          <span className="min-w-0 leading-none">
            <span className="block whitespace-nowrap text-xs font-black uppercase tracking-[0.18em] sm:text-sm xl:tracking-[0.22em]">
              {company.shortName}
            </span>
            <span className="mt-1 hidden max-w-[180px] truncate whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.16em] text-gold sm:block xl:max-w-[230px] xl:text-[10px] xl:tracking-[0.22em]">
              {company.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden h-full flex-nowrap items-center gap-5 xl:flex 2xl:gap-6">
          <Link className="whitespace-nowrap text-sm font-semibold transition hover:text-gold" href="/">
            Home
          </Link>
          <Link className="whitespace-nowrap text-sm font-semibold transition hover:text-gold" href="/#about">
            About Us
          </Link>
          <DesktopDropdown label="Services" items={serviceNavigation} />
          <DesktopDropdown label="Portfolio" items={portfolioNavigation} />
          <Link className="whitespace-nowrap text-sm font-semibold transition hover:text-gold" href="/#process">
            Process
          </Link>
          <Link className="whitespace-nowrap text-sm font-semibold transition hover:text-gold" href="/insight">
            Insight
          </Link>
          <Link className="whitespace-nowrap text-sm font-semibold transition hover:text-gold" href="/#contact">
            Contact
          </Link>
        </div>

        <Link
          href={company.phoneHref}
          className="hidden whitespace-nowrap text-xs font-black uppercase tracking-[0.1em] text-neutral-800 transition hover:text-gold xl:inline-flex 2xl:tracking-[0.14em]"
        >
          {company.phone}
        </Link>

        <Link
          href={company.whatsappHref}
          className="hidden whitespace-nowrap bg-gold px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-neutral-950 md:inline-flex xl:ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </Link>

        <button
          className="grid h-11 w-11 shrink-0 place-items-center border border-neutral-300 text-xl font-black xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
          aria-label="Toggle navigation"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-neutral-200 bg-white xl:hidden">
          <div className="container-x py-3">
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/">
              Home
            </Link>
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/#about">
              About Us
            </Link>
            <MobileGroup label="Services" items={serviceNavigation} />
            <MobileGroup label="Portfolio" items={portfolioNavigation} />
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/#process">
              Process
            </Link>
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/insight">
              Insight
            </Link>
            <Link className="block py-4 text-base font-bold text-neutral-900" href="/#contact">
              Contact
            </Link>
            <a
              className="block border-t border-neutral-200 py-4 text-base font-bold text-neutral-900"
              href={company.phoneHref}
            >
              Phone: {company.phone}
            </a>
            <a
              className="mt-3 flex min-h-12 items-center justify-center bg-gold px-5 text-sm font-black uppercase tracking-[0.16em] text-white"
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
