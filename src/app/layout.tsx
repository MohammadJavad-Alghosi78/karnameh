"use client";
// node_modules
import { ReactNode } from "react";
// Words
import { words } from "@/strings";
// Styles
import "@/styles/globals.css";
import ThemeRegistry from "@/theme/ThemeRegistery";
import { Container, Header } from "@/components/shared";

// export const metadata = {
//   title: words.karnameh,
//   description: words.karnamehDescription,
// };

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
