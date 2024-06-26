import type { Metadata } from "next";
import "./../styles/reset.css";
import "./../styles/globals.css";
import "./../styles/output.css";
import Footer from "../components/ui-elements/footer/Footer";
import Header from "../components/ui-elements/header/header";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Fryderyk Boncler | 2024",
  description: "Web development portfolio of Fryderyk Boncler | Relcnob",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-secondary-200`}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
