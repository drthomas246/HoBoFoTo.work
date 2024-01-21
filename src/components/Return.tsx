import React from "react";
import Link from "next/link";

const Return = ({src="/"}:{src?: string}) => {
  return(
    <Link
      className="fixed z-50 top-5 right-10 hover:bg-blue-600 font-semibold hover:text-gray-100 py-2 px-4 text-gray-100 border border-gray-100 hover:border-transparent rounded bg-[#292929]"
      href={src}
    >
      戻る
    </Link>
  )
}

export default Return;