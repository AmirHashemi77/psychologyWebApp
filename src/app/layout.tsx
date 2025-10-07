import type { Metadata } from "next";

import "./globals.css";
import Header from "@/component/common/layout/header/Header";
import Footer from "@/component/common/layout/footer/Footer";
import ClientWrapper from "@/component/ClientWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
