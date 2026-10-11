import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
    h1: ({ children }) => (
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{children}</h1>
    ),
    h2: ({ children }) => (
        <h2 className="mb-3 mt-10 text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="mb-2 mt-6 text-lg font-semibold text-zinc-200">{children}</h3>,
    p: ({ children }) => <p className="my-4 leading-7 text-zinc-400">{children}</p>,
    ul: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-5 text-zinc-400">{children}</ul>,
    ol: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-5 text-zinc-400">{children}</ol>,
    li: ({ children }) => <li className="leading-7 [&>ol]:my-2 [&>ul]:my-2">{children}</li>,
    strong: ({ children }) => <strong className="font-semibold text-zinc-200">{children}</strong>,
    hr: () => <hr className="my-8 border-white/[0.08]" />,
    a: ({ children, href }) => (
        <a className="text-fuchsia-300 underline-offset-4 hover:underline" href={href}>
            {children}
        </a>
    ),
    code: ({ children }) => (
        <code className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-sm text-fuchsia-200">
            {children}
        </code>
    ),
    table: ({ children }) => (
        <div className="my-5 overflow-x-auto">
            <table className="w-full border-collapse text-sm">{children}</table>
        </div>
    ),
    tr: ({ children }) => <tr className="border-b border-white/[0.08]">{children}</tr>,
    th: ({ children }) => <th className="px-4 py-2.5 text-left font-semibold text-zinc-200">{children}</th>,
    td: ({ children }) => <td className="px-4 py-2.5 text-zinc-400">{children}</td>,
};

export function useMDXComponents(): MDXComponents {
    return components;
}
