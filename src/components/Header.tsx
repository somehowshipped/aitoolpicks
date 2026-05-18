import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-[#f5f5f5]"
        >
          AI Tool Picks
        </Link>

        <nav className="flex items-center gap-6 text-sm text-zinc-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#6366f1]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
