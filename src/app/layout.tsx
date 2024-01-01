import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stepping Stones",
  description: "징검다리 가다가 자빠져라 ㅋㅋㅋ키키캌카 ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Provider>
          <Layout>{children}</Layout>
          <div id="root-portal"></div>
        </Provider>
      </body>
    </html>
  );
}
