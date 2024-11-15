import { Link } from "~/lib/i18n/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-50 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}
