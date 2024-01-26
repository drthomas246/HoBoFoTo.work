import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Blog } from "../../../libs/microcms";

const BlogCard = ({ post }: { post: Blog }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
      <Link href={`./blog/${post.id}`}>
        <Image
          className="rounded-t-lg"
          src={post.eyecatch!.url}
          width={post.eyecatch!.width}
          height={post.eyecatch!.height}
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link href={`./blog/${post.id}`}>
          <h5 className="mb-2 font-yuseiMagic text-2xl font-bold tracking-tight text-gray-900">
            {post.title}
          </h5>
        </Link>
        <p className="mb-3 font-maruGo font-normal text-gray-700">
          正しいことをしても怒られるは一体どんな存在なのかをきっちりわかるのが全ての問題の解くキーとなります。
        </p>
        <div className="block text-right">
          <time
            dateTime="2022-09-02"
            className="order-first flex items-center text-base text-gray-900"
          >
            <span className="ml-3 w-full text-right text-sm">
              {post.updatedAt}
            </span>
          </time>
        </div>
        <div className="pt-4">
          <Link
            href={`./blog/${post.id}`}
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #{post.category!.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
