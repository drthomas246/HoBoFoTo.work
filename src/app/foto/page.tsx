"use client";

import React, { Suspense } from "react";

import Return from "@/components/Return";

import LoadDataToPhotos from "./LoadDataToPhotos";

const Loading = () => {
  return (
    <div className=" flex w-full justify-center">
      <div className="loader w-20"></div>
    </div>
  );
};

const PhotoGallery = () => {
  return (
    <>
      <h1 className="mb-4 mt-2 text-center font-microgramma text-5xl text-gray-100">
        Gallery
      </h1>
      <Return />
      <div className="p-4">
        <Suspense fallback={<Loading />}>
          <LoadDataToPhotos />
        </Suspense>
      </div>
    </>
  );
};

export default PhotoGallery;
