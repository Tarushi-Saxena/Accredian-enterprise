import { navItems } from "@/lib/site-data";
import { EnterpriseLogo } from "@/components/brand/EnterpriseLogo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklab,var(--accent)_35%,transparent)] to-transparent" />
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <EnterpriseLogo theme="dark" mode="full" className="h-10 w-[180px]" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Learning that ships</p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Next-gen learning for high-performance teams—tailored programs, expert facilitators, and measurable outcomes.
          </p>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--muted)]">Explore</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="font-semibold text-[var(--ink)]/80 transition hover:text-[var(--accent)]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--muted)]">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <li>
              <a className="font-semibold text-[var(--ink)]/80 hover:text-[var(--accent)]" href="mailto:enterprise@accredian.com">
                enterprise@accredian.com
              </a>
            </li>
            <li className="font-medium">Mon–Fri, 9:00–18:00 IST</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-[var(--border)] py-6">
        <Container className="flex flex-col items-start justify-between gap-3 text-xs text-[var(--muted)] sm:flex-row sm:items-center">
          <p>© {year} Accredian Enterprise (demo rebuild). Not affiliated with the reference site.</p>
          <p className="sm:text-right">Built with Next.js · Tailwind CSS</p>
        </Container>
      </div>
    </footer>
  );
}
