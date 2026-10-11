import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { ABOUT_DESCRIPTION, ABOUT_HEADLINE, DISCORD_INVITE, SCROLL_SECTION, SECTION_HEADERS } from "@/lib/constants";

export default function About() {
    return (
        <section id="about" className={`relative py-24 md:py-32 ${SCROLL_SECTION}`}>
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <SectionHeader label={SECTION_HEADERS.about.label} title={SECTION_HEADERS.about.title} />
                    {ABOUT_HEADLINE && (
                        <p className="mb-6 mt-6 text-2xl font-semibold leading-snug tracking-tight text-zinc-200 md:text-3xl">
                            {ABOUT_HEADLINE}
                        </p>
                    )}
                    <p className="text-zinc-500 leading-relaxed">{ABOUT_DESCRIPTION}</p>
                    <div className="mt-10 flex w-full flex-col overflow-hidden rounded-[2px] bg-[#1a1628]">
                        <a
                            href={DISCORD_INVITE.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-5 px-7 py-7 transition-all duration-300 hover:bg-white/[0.04]"
                        >
                            <Image src="/icons/discord.svg" alt="" width={32} height={32} className="h-8 w-8 shrink-0 opacity-50 transition-all duration-300 group-hover:opacity-90 group-hover:scale-110" draggable={false} />
                            <div className="flex-1 text-left">
                                <p className="text-xs text-zinc-600">Community</p>
                                <p className="mt-0.5 text-base font-semibold text-white/80 transition-colors group-hover:text-white">ARCADIA Discord</p>
                                <p className="mt-0.5 text-sm leading-snug text-zinc-500">{DISCORD_INVITE.description}</p>
                            </div>
                            <span className="shrink-0 text-zinc-700 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-400">↗</span>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
