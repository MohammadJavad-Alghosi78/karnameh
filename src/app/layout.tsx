"use client";
// node_modules
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
// Styles
import "@/styles/globals.css";
import ThemeRegistry from "@/theme/ThemeRegistery";

// export const metadata = {
//   title: words.karnameh,
//   description: words.karnamehDescription,
// };

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
