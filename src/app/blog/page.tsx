import React from "react";

import BlogCard from "@/components/BlogCard";
import Return from "@/components/Return";
import { getList } from "../../../libs/microcms";

const Home = async () => {
  const { contents } = await getList();
  return(
    <>
      <h1 className="text-gray-100 text-5xl mt-2 mb-4 text-center font-microgramma">Blog</h1>
      <Return />
      <div className="grid grid-cols-3 gap-4 m-4 mt-8">
      {contents.map((post) => {
        return(
          <BlogCard key={post.id} post={post}/>
        );
      })}
      </div>
      
    </>
    
  )
}

export default Home 