import Image from "next/image";
import Link from "next/link";
import React from "react";

import Date2String from "@/components/DateString";

import { Blog } from "../../../libs/microcms";
import hatsukami2 from "../../../public/AdobeStock_374606998.jpeg";

const BlogCard = ({ post, list }: { post: Blog; list: string }) => {
  const updateDate = Date2String(post.updatedAt);
  let link: string;
  if (list === "category") {
    link = `../../blog/${post.id}`;
  } else {
    link = `./blog/${post.id}`;
  }
  return (
    <>
      <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row">
        <Image
          className="h-80 w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-s-lg"
          src={post.eyecatch ? post.eyecatch.url : hatsukami2.src}
          width={post.eyecatch ? post.eyecatch.width : hatsukami2.width}
          height={post.eyecatch ? post.eyecatch.height : hatsukami2.height}
          alt="eyecatch"
          priority
        />
        <div className="flex flex-col justify-between p-3 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {post.title}
          </h5>
          <p className="mb-2 text-sm font-normal text-gray-700">
            {post.metadescription.substring(0, 80)}...
          </p>
          <div className="block text-right">
            <time
              dateTime={updateDate}
              className="order-first flex items-center text-base text-gray-900"
            >
              <span className="ml-3 w-full text-right text-sm">
                {updateDate}
              </span>
            </time>
          </div>
          <div className="pt-2">
            <Link
              href={link}
              className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          </div>
          <div className="flex justify-end">
            <Link
              href={`./blog/category/${post.category}`}
              className="inline-block"
            >
              <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #{post.category}
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
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
    </div> */}
    </>
  );
};

export default BlogCard;
