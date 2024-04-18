import type { Metadata } from "next";
import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/output.css";
import { ThemeProvider } from "next-themes";
import CustomCursor from "./components/functionalities/custom-cursor/Custom-cursor";

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
      <body className={`bg-white dark:bg-secondary-200 sans`}>{children}</body>
    </html>
  );
}
