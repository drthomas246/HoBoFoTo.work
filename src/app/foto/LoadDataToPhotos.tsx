import React, { use } from "react";

import Photos from "@/app/foto/Photos";

import { getMedia } from "../../../libs/microcms";

const LoadDataToPhotos = ()=> {
  const photos = use(getMedia());
  return(
    <Photos photos={photos} />
  )
}

export default LoadDataToPhotos;