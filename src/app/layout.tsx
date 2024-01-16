import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/share/Header";
import RecoilProvider from "./recoilProvider";

export const metadata: Metadata = {
  title: "App page",
  description: "Practice app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <RecoilProvider>
          <Header />
          {children}
        </RecoilProvider>
      </body>
    </html>
  );
}
