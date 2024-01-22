const breakpoints = [800, 640, 450, 256, 128, 96, 64, 48];

const unsplashLink = (id: string) =>
  `https://www.hobofoto.net/wp-content/uploads/${id}`;

const unsplashPhotos = [
  { id: "DSC_0484.png", width: 600, height: 450 },
  { id: "DSC_0506.jpg", width: 450, height: 600 },
  { id: "DSC_03951.jpg", width: 600, height: 423 },
  { id: "DSC_0525.png", width: 615, height: 800 },
  { id: "DSC_0598.png", width: 450, height: 800 },
  { id: "DSC_0665.png", width: 450, height: 800 },
  { id: "IMG_0315.png", width: 400, height: 600 },
  { id: "IMG_20160508_124414.jpg", width: 450, height: 600 },
  { id: "IMG_20160525_173710.jpg", width: 600, height: 450 },
  { id: "IMG_20160604_173243.jpg", width: 450, height: 600 },
  { id: "IMG_20160606_090841.jpg", width: 450, height: 600 },
  { id: "IMG_20160606_094701.jpg", width: 450, height: 600 },
  { id: "IMG_20161112_111017.png", width: 450, height: 600 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
