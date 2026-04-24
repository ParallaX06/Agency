import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary px-4 py-12 md:px-8">
      <div className="section-shell grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-text-primary">1ne Click Media</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">Independent digital growth partner for focused teams that need execution depth.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">Navigate</h4>
          <ul className="mt-3 grid gap-2">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-text-secondary transition hover:text-text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">Contact</h4>
          <p className="mt-3 text-sm text-text-secondary">support@1neclickmedia.in</p>
          <p className="text-sm text-text-secondary">+91 82889-99923</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">Social</h4>
          <div className="mt-3 flex gap-3 text-sm text-text-secondary">
            <Link href="#" className="transition hover:text-text-primary">LinkedIn</Link>
            <Link href="#" className="transition hover:text-text-primary">X</Link>
            <Link href="#" className="transition hover:text-text-primary">Dribbble</Link>
          </div>
        </div>
      </div>
      <p className="section-shell mt-10 text-xs text-text-tertiary">© {new Date().getFullYear()} 1ne Click Media. All rights reserved.</p>
    </footer>
  );
}
