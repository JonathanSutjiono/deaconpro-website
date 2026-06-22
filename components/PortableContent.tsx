import { PortableText, type PortableTextBlock } from "@portabletext/react";

export default function PortableContent({ value }: { value: PortableTextBlock[] }) {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          normal: ({ children }) => (
            <p className="text-base leading-8 text-neutral-700 md:text-[18px] md:leading-9">
              {children}
            </p>
          ),
          h2: ({ children }) => (
            <h2 className="pt-3 text-3xl font-black uppercase leading-tight text-neutral-950 md:text-4xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="pt-2 text-2xl font-black uppercase leading-tight text-neutral-950">
              {children}
            </h3>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gold pl-5 text-xl font-semibold leading-8 text-neutral-800">
              {children}
            </blockquote>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="list-disc space-y-3 pl-6 text-base leading-8 text-neutral-700 md:text-[18px]">
              {children}
            </ul>
          ),
          number: ({ children }) => (
            <ol className="list-decimal space-y-3 pl-6 text-base leading-8 text-neutral-700 md:text-[18px]">
              {children}
            </ol>
          ),
        },
        marks: {
          link: ({ children, value }) => {
            const href = typeof value?.href === "string" ? value.href : "#";
            const external = href.startsWith("http");
            return (
              <a
                href={href}
                className="font-semibold text-gold underline decoration-gold/40 underline-offset-4"
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {children}
              </a>
            );
          },
        },
      }}
    />
  );
}
