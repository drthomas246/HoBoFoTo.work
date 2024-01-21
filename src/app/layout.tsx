import type { Metadata } from "next";

import TypekitLoader from "@/components/TypekitLoader";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "HoBoFoTo.work",
  description: "写真とブログとソフトウェアと",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="ja">
      <TypekitLoader />
      <body className="bg-[#292929]">
        {children}
      </body>
    </html>
  )
}

export default RootLayout;