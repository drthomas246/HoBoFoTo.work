import Link from "next/link";
import React from "react";

const Return = ({ src = "/" }: { src?: string }) => {
  return (
    <Link
      className="fixed right-10 top-5 z-50 rounded border border-gray-100 bg-[#292929] px-4 py-2 font-semibold text-gray-100 hover:border-transparent hover:bg-blue-600 hover:text-gray-100"
      href={src}
    >
      戻る
    </Link>
  );
};

export default Return;
