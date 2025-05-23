import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import { PageTransition } from "@/components/page-transition"

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Indian International Higher Secondary School - Kadwasa Chouraha",
  description: "Quality education from Nursery to 12th standard in English and Hindi medium",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <SiteFooter />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
