"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Return = ({ curPage }: { curPage?: string }) => {
  const router = useRouter();
  return (
    <>
      {curPage !== undefined ? (
        <Link
          className="fixed left-10 top-5 z-50 rounded border border-gray-100 bg-[#292929] px-4 py-2 font-semibold text-gray-100 hover:border-transparent hover:bg-blue-600 hover:text-gray-100"
          href={{ pathname: "/", query: { curPage: curPage } }}
        >
          戻る
        </Link>
      ) : (
        <button
          className="fixed left-10 top-5 z-50 rounded border border-gray-100 bg-[#292929] px-4 py-2 font-semibold text-gray-100 hover:border-transparent hover:bg-blue-600 hover:text-gray-100"
          type="button"
          onClick={() => router.back()}
        >
          戻る
        </button>
      )}
    </>
  );
};

export default Return;
