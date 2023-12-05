"use client";
// node_modules
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// Theme
import ThemeRegistry from "@/theme/ThemeRegistery";
// Styles
import "@/styles/globals.css";

const queryClient = new QueryClient();

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
