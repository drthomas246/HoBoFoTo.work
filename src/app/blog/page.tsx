import React from "react";

import BlogCard from "@/app/blog/BlogCard";
import Return from "@/components/Return";

import { getList } from "../../../libs/microcms";

const Home = async () => {
  const { contents } = await getList();
  return (
    <>
      <h1 className="mb-4 mt-2 text-center font-microgramma text-5xl text-gray-100">
        Blog
      </h1>
      <Return />
      <div className="m-4 mt-8 grid grid-cols-3 gap-4">
        {contents.map((post) => {
          return <BlogCard key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};

export default Home;
