import "@/app/globals.css";

import type { Metadata } from "next";

import TypekitLoader from "@/components/TypekitLoader";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "HoBoFoTo.work",
  description: "写真とブログとソフトウェアと",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" suppressHydrationWarning>
      <TypekitLoader />
      <body className=" bg-gray-100 text-[#292929] dark:bg-[#292929]  dark:text-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
