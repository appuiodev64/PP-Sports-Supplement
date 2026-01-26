import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "PP Crypto",
  description:
    "Educational platform about anabolic steroids and related substances.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
            <div className="rounded-2xl bg-white p-6 text-slate-900 md:p-10">
              {children}
            </div>
          </div>

          <footer className="mx-auto mt-8 max-w-6xl px-1 text-sm text-white/70">
            © {new Date().getFullYear()} Les supplements sportifs
          </footer>
        </main>
      </body>
    </html>
  );
}
