import { Footer } from "~/_components/Footer";
import { Header } from "~/_components/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  );
}
