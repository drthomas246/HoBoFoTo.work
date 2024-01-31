import Link from "next/link";
import React from "react";

import BlogCard from "@/app/blog/BlogCard";
import Return from "@/components/Return";

import { getList } from "../../../libs/microcms";

const Home = async () => {
  const { contents } = await getList();
  return (
    <div className="mx-auto my-5 max-w-4xl">
      <h2 className="mb-4 mt-2 text-center font-microgramma text-5xl text-gray-100">
        Blog
      </h2>
      <Return curPage="2" />
      <nav className="flex justify-center space-x-6 font-microgramma text-2xl text-gray-100">
        <span className="inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-gray-100 px-1 py-4 focus:outline-none disabled:opacity-50">
          List
        </span>
        <span className="inline-flex items-center gap-x-2 whitespace-nowrap px-1 py-4 hover:text-blue-600 focus:outline-none disabled:opacity-50">
          <Link href="./blog/category">Category</Link>
        </span>
      </nav>
      <div className="m-4 mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {contents.map((post) => {
          return <BlogCard key={post.id} post={post} list="category" />;
        })}
      </div>
    </div>
  );
};

export default Home;
