"use client";

import Link from "next/link";
import Image from "next/image";
import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { company, type CompanyInfo } from "@/data/company";
import { portfolioNavigation } from "@/data/portfolio";
import { serviceNavigation } from "@/data/services";

function Chevron({ open }: { open?: boolean }) {
  return (
    <ChevronDown
      className={`ml-1.5 h-3.5 w-3.5 transition ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    />
  );
}

function DesktopDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        className="flex h-[76px] items-center whitespace-nowrap text-[15px] font-semibold leading-5 text-neutral-800 transition hover:text-gold focus:outline-none focus-visible:text-gold"
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        {label}
        <Chevron open={open} />
      </button>
      <div
        id={menuId}
        className={`absolute left-0 top-full z-[1210] w-64 border border-neutral-200/90 bg-white p-1 shadow-surface transition duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block border-b border-neutral-100 px-4 py-3.5 text-[15px] font-semibold leading-5 text-neutral-700 transition last:border-b-0 hover:bg-neutral-950 hover:text-champagne focus:outline-none focus-visible:bg-neutral-950 focus-visible:text-champagne"
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
  onNavigate,
}: {
  label: string;
  items: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="border-b border-neutral-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left text-base font-bold text-neutral-900"
        onClick={() => setOpen((value) => !value)}
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
      >
        {label}
        <Chevron open={open} />
      </button>
      {open ? (
        <div id={contentId} className="pb-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 pl-4 text-base font-semibold text-neutral-700"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar({ companyInfo = company }: { companyInfo?: CompanyInfo }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-[1200] border-b border-neutral-200/85 bg-white/95 text-neutral-950 shadow-[0_8px_30px_rgba(17,17,17,0.05)] backdrop-blur-md">
      <nav aria-label="Primary navigation" className="mx-auto flex h-[76px] w-full max-w-[1536px] flex-nowrap items-center justify-between gap-3 px-4 sm:px-6 xl:gap-3 xl:px-8 2xl:gap-4">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3"
          aria-label="Deacon Pro home"
        >
          {companyInfo.logoMarkUrl ? (
            <span className="relative h-10 w-10 shrink-0 bg-neutral-950 xl:h-11 xl:w-11">
              <Image src={companyInfo.logoMarkUrl} alt="" fill sizes="44px" className="object-contain p-1" />
            </span>
          ) : (
            <span className="grid h-10 w-10 shrink-0 place-items-center bg-neutral-950 text-[13px] font-black tracking-normal text-champagne xl:h-11 xl:w-11">
              DP
            </span>
          )}
          {companyInfo.logoUrl ? (
            <span className="relative h-10 w-32 sm:w-36">
              <Image src={companyInfo.logoUrl} alt={companyInfo.shortName} fill sizes="144px" className="object-contain object-left" />
            </span>
          ) : (
            <span className="leading-none">
              <span className="block whitespace-nowrap text-[13px] font-black uppercase leading-5 tracking-normal sm:text-sm">
                {companyInfo.shortName}
              </span>
              <span className="mt-1 hidden whitespace-nowrap text-[12px] font-bold uppercase leading-4 tracking-normal text-gold xl:block 2xl:hidden">
                {companyInfo.shortTagline}
              </span>
              <span className="mt-1 hidden whitespace-nowrap text-[12px] font-bold uppercase leading-4 tracking-normal text-gold 2xl:block">
                {companyInfo.tagline}
              </span>
            </span>
          )}
        </Link>

        <div className="hidden h-full flex-nowrap items-center gap-3 xl:flex 2xl:gap-4">
          <Link aria-current={pathname === "/" ? "page" : undefined} className="whitespace-nowrap text-[15px] font-semibold leading-5 transition hover:text-gold focus:outline-none focus-visible:text-gold" href="/">
            Home
          </Link>
          <Link className="whitespace-nowrap text-[15px] font-semibold leading-5 transition hover:text-gold focus:outline-none focus-visible:text-gold" href="/#about">
            About Us
          </Link>
          <DesktopDropdown label="Services" items={serviceNavigation} />
          <DesktopDropdown label="Portfolio" items={portfolioNavigation} />
          <Link className="whitespace-nowrap text-[15px] font-semibold leading-5 transition hover:text-gold focus:outline-none focus-visible:text-gold" href="/#process">
            Process
          </Link>
          <Link aria-current={pathname === "/insight" ? "page" : undefined} className="whitespace-nowrap text-[15px] font-semibold leading-5 transition hover:text-gold focus:outline-none focus-visible:text-gold" href="/insight">
            Insight
          </Link>
          <Link className="whitespace-nowrap text-[15px] font-semibold leading-5 transition hover:text-gold focus:outline-none focus-visible:text-gold" href="/#contact">
            Contact
          </Link>
        </div>

        <Link
          href={companyInfo.phoneHref}
          className="hidden whitespace-nowrap text-[14px] font-black uppercase leading-5 tracking-normal text-neutral-800 transition hover:text-gold focus:outline-none focus-visible:text-gold xl:inline-flex"
        >
          {companyInfo.phone}
        </Link>

        <Link
          href={companyInfo.whatsappHref}
          className="hidden whitespace-nowrap border border-gold bg-gold px-4 py-3 text-[14px] font-black uppercase leading-5 tracking-normal text-white transition hover:border-neutral-950 hover:bg-neutral-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/25 md:inline-flex xl:ml-1 2xl:px-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </Link>

        <Link
          href={companyInfo.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consult via WhatsApp"
          className="grid h-11 w-11 shrink-0 place-items-center border border-gold bg-gold text-white transition hover:bg-neutral-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/25 md:hidden"
        >
          <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
        </Link>

        <button
          className="grid h-11 w-11 shrink-0 place-items-center border border-neutral-300 text-neutral-950 transition hover:border-gold hover:text-gold xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-navigation" aria-label="Mobile navigation" className="relative z-[1210] max-h-[calc(100vh-76px)] overflow-y-auto border-t border-neutral-200 bg-white xl:hidden">
          <div className="container-x py-3">
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/#about" onClick={() => setOpen(false)}>
              About Us
            </Link>
            <MobileGroup label="Services" items={serviceNavigation} onNavigate={() => setOpen(false)} />
            <MobileGroup label="Portfolio" items={portfolioNavigation} onNavigate={() => setOpen(false)} />
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/#process" onClick={() => setOpen(false)}>
              Process
            </Link>
            <Link className="block border-b border-neutral-200 py-4 text-base font-bold text-neutral-900" href="/insight" onClick={() => setOpen(false)}>
              Insight
            </Link>
            <Link className="block py-4 text-base font-bold text-neutral-900" href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <a
              className="block border-t border-neutral-200 py-4 text-base font-bold text-neutral-900"
              href={companyInfo.phoneHref}
            >
              Phone: {companyInfo.phone}
            </a>
            <a
              className="button-primary mt-3 w-full px-5"
              href={companyInfo.whatsappHref}
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
