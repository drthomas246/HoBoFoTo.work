import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        className="rounded border-4 border-[#292929] dark:border-gray-100"
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, onClick }}
      />
    </div>
  );
}
