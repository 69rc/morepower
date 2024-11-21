import { MainNav } from "@/components/main-nav";
// import { ThemeProvider } from "@/components/theme-provider";

// import "@/styles/globals.css";
import Home from './components/home-page'


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
      
          <MainNav />
          <main>{children}</main>
          <Home/>
       
      </body>
    </html>
  );
}
