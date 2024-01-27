import Image from "next/image";
import Link from "next/link";
import React from "react";

import Date2String from "@/components/DateString";

import { Blog } from "../../../libs/MicroCms";

const BlogCard = ({ post, list }: { post: Blog; list: string }) => {
  const updateDate = Date2String(post.updatedAt);
  let link: string;
  if (list === "category") {
    link = `../../blog/${post.id}`;
  } else {
    link = `./blog/${post.id}`;
  }
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
      <Link href={link}>
        <Image
          className="rounded-t-lg"
          src={post.eyecatch!.url}
          width={post.eyecatch!.width}
          height={post.eyecatch!.height}
          alt="eyecatch"
          priority
        />
      </Link>
      <div className="p-5">
        <Link href={link}>
          <h5 className="mb-2 font-yuseiMagic text-xl font-bold tracking-tight text-gray-900">
            {post.title}
          </h5>
        </Link>
        <p className="mb-3 font-maruGo text-sm font-normal text-gray-700">
          {post.metadescription}
        </p>
        <div className="block text-right">
          <time
            dateTime={updateDate}
            className="order-first flex items-center text-base text-gray-900"
          >
            <span className="ml-3 w-full text-right text-sm">{updateDate}</span>
          </time>
        </div>
        <div className="pt-4">
          <Link
            href={link}
            className="mr-2 inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="ms-2 size-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <Link href={`./blog/category/${post.category}`}>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #{post.category}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
