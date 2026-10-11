import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { blackOpsOne } from "@/lib/font";
import {
    BUSINESS_INFO,
    CONTACT_EMAIL,
    CONTACT_KAKAO,
    COPYRIGHT,
    FOOTER_SLOGAN,
    FOOTER_SNS,
    FOOTER_SUPPORT,
    LOGO_PATHS,
    POLICY_PAGES,
    SITE_NAME,
} from "@/lib/constants";

const columnTitle = "text-xs font-semibold uppercase tracking-widest text-zinc-400";
const contactButton =
    "flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.08] transition-colors hover:border-white/20 [&_img]:opacity-50 hover:[&_img]:opacity-90";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/[0.06] bg-black/20">
            <Container>
                <div className="flex flex-col gap-10 py-10 sm:flex-row sm:items-start sm:justify-between">
                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <Link href="/" className="flex w-fit items-center gap-2.5">
                            <Image src={LOGO_PATHS.main} alt="" width={32} height={32} className="h-8 w-8 shrink-0 opacity-80" draggable={false} />
                            <span className={`${blackOpsOne.className} text-xl tracking-[0.02em] text-zinc-200`}>{SITE_NAME}</span>
                        </Link>
                        <p className="text-xs leading-relaxed text-zinc-500">
                            {FOOTER_SLOGAN.en}
                            <br />
                            {FOOTER_SLOGAN.ko}
                        </p>
                        <div className="flex items-center gap-2">
                            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="이메일 문의" className={contactButton}>
                                <Image src="/icons/mail.svg" alt="" width={16} height={16} className="h-4 w-4" draggable={false} />
                            </a>
                            <a href={CONTACT_KAKAO.href} target="_blank" rel="noopener noreferrer" aria-label="카카오톡 문의" className={contactButton}>
                                <Image src="/icons/chat.svg" alt="" width={16} height={16} className="h-4 w-4" draggable={false} />
                            </a>
                        </div>
                    </div>

                    {/* Columns */}
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-3">
                            <p className={columnTitle}>지원</p>
                            <ul className="flex flex-col gap-1" role="list">
                                {FOOTER_SUPPORT.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} className="text-sm text-zinc-500 transition-colors hover:text-zinc-200">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className={columnTitle}>소셜</p>
                            <div className="flex items-center gap-3">
                                {FOOTER_SNS.map((sns) => (
                                    <a
                                        key={sns.label}
                                        href={sns.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={sns.label}
                                        className="opacity-50 transition-opacity hover:opacity-90"
                                    >
                                        <Image src={sns.icon} alt="" width={20} height={20} className="h-5 w-5" draggable={false} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="space-y-3 border-t border-white/[0.06] py-6">
                    <p className="text-xs leading-relaxed text-zinc-600">
                        {BUSINESS_INFO.name}
                        <br />
                        대표자명: {BUSINESS_INFO.representative}&nbsp;&nbsp;|&nbsp;&nbsp;사업자등록번호: {BUSINESS_INFO.businessRegistrationNumber}
                        &nbsp;&nbsp;|&nbsp;&nbsp;통신판매업신고번호: {BUSINESS_INFO.mailOrderSalesRegistration}
                        <br />
                        소재지: {BUSINESS_INFO.address}
                        <br />
                        이메일: {CONTACT_EMAIL}
                    </p>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-zinc-600">{COPYRIGHT}</p>
                        <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="정책 및 약관">
                            {POLICY_PAGES.map((page) => (
                                <Link
                                    key={page.href}
                                    href={page.href}
                                    className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
                                >
                                    {page.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
