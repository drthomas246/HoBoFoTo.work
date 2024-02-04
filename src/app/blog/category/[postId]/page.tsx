import React from "react";

import BlogCard from "@/app/blog/BlogCard";
import DarkToggleButton from "@/components/DarkToggleButton";
import Return from "@/components/Return";

import { getList } from "../../../../../libs/microcms";

const Home = async ({ params: { postId } }: { params: { postId: string } }) => {
  const { contents } = await getList({
    filters: `category[contains]${decodeURIComponent(postId)}`,
  });
  return (
    <div className="mx-auto my-5 max-w-4xl">
      <h2 className="mb-4 mt-2 text-center font-microgramma text-5xl">
        Category
      </h2>
      <div className="flex justify-center font-microgramma text-2xl">
        {decodeURIComponent(postId)}
      </div>
      <Return />
      <DarkToggleButton />
      <div className="m-4 mt-8 grid grid-cols-2 gap-4">
        {contents.map((post) => {
          return <BlogCard key={post.id} post={post} list="category" />;
        })}
      </div>
    </div>
  );
};

export default Home;
