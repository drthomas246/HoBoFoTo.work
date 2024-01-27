import { createClient, MicroCMSDate, MicroCMSImage, MicroCMSQueries } from "microcms-js-sdk";

import Date2String from "@/components/DateString";

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  metadescription: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category: string;
} & MicroCMSDate;

//画像の型定義
export type Url = {
  url: string;
  width: number;
  height: number;
}

//メディアの型定義
export type Media = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  image: Url;
}


if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("NEXT_PUBLIC_MICROCMS_API_KEY is required");
}

const breakpoints = [800, 640, 450, 256, 128, 96, 64, 48];

const unsplashLink = (url: string, height: number) =>
 `${url}?h=${height}`;

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });
  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
 return detailData;
};

// 画像一覧を取得
export const getMedia = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Media>({
    endpoint: "images",
    queries,
  });
  const { contents }= listData
  const photos = contents.map((photo) => ({
    src: photo.image.url,
    width: photo.image.width,
    height: photo.image.height,
    title: photo.title,
    description: Date2String(photo.createdAt),
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.image.height / photo.image.width) * breakpoint);
      return {
        src: unsplashLink(photo.image.url, height),
        width: breakpoint,
        height,
      };
    }),
  }));
  return photos;
};
