import type { Metadata } from "next";
import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/output.css";

export const metadata: Metadata = {
  title: "Relcnob | 2024",
  description: "Web development portfolio of Fryderyk Boncler | Relcnob",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-secondary-100`}>{children}</body>
    </html>
  );
}
