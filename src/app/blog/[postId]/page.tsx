import React from "react";
import parse from "html-react-parser";

import { getDetail } from "../../../../libs/microcms";
import Return from "@/components/Return";

const Home = async ({params: { postId }}: {params: { postId: string }}) => {
  const post = await getDetail(postId);
  return(
    <div className="mx-auto max-w-2xl my-5">
      <Return src="/blog"/>
      <header className="flex flex-col">
        <h2 className="font-yuseiMagic mt-6 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl dark:text-zinc-100">{post.title}</h2>
        <time dateTime="2022-09-02" className="order-first flex items-center text-base text-gray-100 dark:text-zinc-500">
          <span className="h-4 w-0.5 rounded-full bg-gray-100 dark:bg-zinc-500"></span>
          <span className="ml-3">{post.updatedAt}</span>
        </time>
      </header>
      <div className="mt-4">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-100">#{post.category?.name}</span>
      </div>
      <div className="font-maruGo mt-8 text-gray-100 text-lg [&>p]:indent-4">
        {parse(post.content)}
      </div>
    </div>
  )
}

export default Home;