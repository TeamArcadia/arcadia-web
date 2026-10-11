import Container from "@/components/layout/Container";
import PolicyNav from "./PolicyNav";

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            <div className="flex gap-10 py-12 lg:py-16">
                <aside className="hidden w-52 shrink-0 lg:block">
                    <div className="sticky top-28">
                        <PolicyNav />
                    </div>
                </aside>
                <article className="min-w-0 max-w-3xl flex-1 select-text">{children}</article>
            </div>
        </Container>
    );
}
