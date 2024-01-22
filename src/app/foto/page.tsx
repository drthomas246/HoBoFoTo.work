"use client";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import NextJsImage from "@/components/NextJsImage";
import photos from "@/components/photos";
import Return from "@/components/Return";

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <h1 className="mb-4 mt-2 text-center font-microgramma text-5xl text-gray-100">
        Gallery
      </h1>
      <Return />
      <div className="p-4">
        <PhotoAlbum
          photos={photos}
          spacing={10}
          padding={4}
          layout="rows"
          renderPhoto={NextJsImage}
          onClick={({ index }) => setIndex(index)}
          targetRowHeight={300}
          defaultContainerWidth={1200}
          sizes={{ size: "100vw" }}
        />
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </>
  );
};

export default PhotoGallery;
