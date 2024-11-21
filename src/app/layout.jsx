import { MainNav } from "@/components/main-nav"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <MainNav />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>)
  );
}

