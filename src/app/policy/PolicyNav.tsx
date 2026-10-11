"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { POLICY_PAGES } from "@/lib/constants";

const linkBase = "block rounded-md transition-colors hover:bg-white/5 hover:text-zinc-200";

export default function PolicyNav() {
    const pathname = usePathname();
    const isActive = (href: string) => pathname.replace(/\/?$/, "/") === href;
    const linkClass = (href: string) => (isActive(href) ? "bg-white/[0.06] text-white" : "text-zinc-500");

    return (
        <nav aria-label="정책 및 약관">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-zinc-600">정책 및 약관</p>
            <ul className="flex flex-col gap-0.5" role="list">
                {POLICY_PAGES.map((page) => (
                    <li key={page.href}>
                        <Link href={page.href} className={`${linkBase} px-3 py-2 text-sm ${linkClass(page.href)}`}>
                            {page.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
