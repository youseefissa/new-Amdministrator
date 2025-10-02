import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Acme — Beautiful product for modern teams",
    template: "%s — Acme",
  },
  description:
    "Launch your product with a fast, modern landing page. Clean UI, clear pricing, and excellent performance.",
  openGraph: {
    title: "Acme — Beautiful product for modern teams",
    description:
      "Launch your product with a fast, modern landing page. Clean UI, clear pricing, and excellent performance.",
    url: "https://example.com",
    siteName: "Acme",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "Acme",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acme — Beautiful product for modern teams",
    description:
      "Launch your product with a fast, modern landing page. Clean UI, clear pricing, and excellent performance.",
    images: [
      {
        url: "/vercel.svg",
        alt: "Acme",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="inline-block h-6 w-6 rounded bg-black dark:bg-white"></span>
              <span>Acme</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="hover:opacity-80">Features</a>
              <a href="#pricing" className="hover:opacity-80">Pricing</a>
              <a href="#faq" className="hover:opacity-80">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              {/* Theme toggle will be wired later */}
              <button
                type="button"
                aria-label="Toggle theme"
                data-theme-toggle
                className="h-9 w-9 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
              />
              <a
                href="#pricing"
                className="hidden sm:inline-flex h-9 items-center rounded-md px-4 text-sm font-medium bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
              >
                Get started
              </a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-black/10 dark:border-white/10 mt-16">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="opacity-70">© {new Date().getFullYear()} Acme. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-80">Privacy</a>
              <a href="#" className="hover:opacity-80">Terms</a>
              <a href="#" className="hover:opacity-80">Contact</a>
            </div>
          </div>
        </footer>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{const e=localStorage.getItem("theme");const d=document.documentElement;const m=window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark=e?e==='dark':m;d.classList.toggle('dark',isDark);}catch{}})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{document.addEventListener('click',function(e){const b=e.target.closest('[data-theme-toggle]');if(!b)return;const d=document.documentElement;const isDark=d.classList.toggle('dark');try{localStorage.setItem('theme',isDark?'dark':'light');}catch{}});})();`,
          }}
        />
      </body>
    </html>
  );
}
