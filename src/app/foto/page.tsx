"use client"

import React, { Suspense } from "react";

import Photos from "@/components/Photos";
import Return from "@/components/Return";


const PhotoGallery = () => {
  return (
    <>
      <h1 className="mb-4 mt-2 text-center font-microgramma text-5xl text-gray-100">
        Gallery
      </h1>
      <Return />
      <div className="p-4">
        <Suspense fallback={<div>loading...</div>}>
          <Photos />
        </Suspense>
      </div>
    </>
  );
};

export default PhotoGallery;
