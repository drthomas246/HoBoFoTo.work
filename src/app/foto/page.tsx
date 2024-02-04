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
      <h2 className="mb-4 mt-2 text-center font-microgramma text-5xl">
        Gallery
      </h2>
      <Return curPage="1" />
      <div className="p-4">
        <Suspense fallback={<Loading />}>
          <LoadDataToPhotos />
        </Suspense>
      </div>
    </>
  );
};

export default PhotoGallery;
