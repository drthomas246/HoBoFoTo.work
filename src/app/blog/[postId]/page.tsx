import parse from "html-react-parser";
import { Metadata } from "next";
import React from "react";

import Date2String from "@/components/DateString";
import Return from "@/components/Return";

import { getDetail } from "../../../../libs/microcms";

export async function generateMetadata({
  params: { postId },
}: {
  params: { postId: string };
}): Promise<Metadata> {
  const post = await getDetail(postId);
  return {
    title: post.title,
    description: post.metadescription,
    openGraph: {
      images: post.eyecatch?.url,
    },
  };
}

const Home = async ({ params: { postId } }: { params: { postId: string } }) => {
  const post = await getDetail(postId);
  const updateDate = Date2String(post.updatedAt);
  return (
    <div className="mx-4 my-5 max-w-4xl sm:mx-auto">
      <Return />
      <header className="flex flex-col">
        <h2 className="mt-6 font-yuseiMagic text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl dark:text-zinc-100">
          {post.title}
        </h2>
        <time
          dateTime="2022-09-02"
          className="order-first flex items-center text-base text-gray-100 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-gray-100 dark:bg-zinc-500"></span>
          <span className="ml-3">{updateDate}</span>
        </time>
      </header>
      <div className="mt-4">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-100">
          #{post.category}
        </span>
      </div>
      <div className="mt-8 font-maruGo text-lg text-gray-100 [&>p]:indent-4">
        {parse(post.content)}
      </div>
    </div>
  );
};

export default Home;
