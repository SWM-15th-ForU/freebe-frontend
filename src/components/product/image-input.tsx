import { Image } from "product-types";
import { Dispatch, SetStateAction, useRef } from "react";
import { AddButton } from "../buttons/common-buttons";
import ImageThumbnail from "../common/image-thumbnail";
import { Body15SB } from "../texts/texts";

interface ImageInputProps {
  images: Image[];
  setImage: Dispatch<SetStateAction<Image[]>>;
}

const ARRAY_START_INDEX = 0;
const MAX_IMAGE_COUNT = 4;

const ImagesInput = ({ images, setImage }: ImageInputProps) => {
  const InputRef = useRef<HTMLInputElement>(null);

  function handleAddImage(
    e: React.DragEvent | React.ChangeEvent<HTMLInputElement>,
  ) {
    e.preventDefault();
    if (e.type === "drop") {
      const event = e as React.DragEvent;
      const droppedFiles = Array.from(event.dataTransfer.files);
      setImage((prev) => {
        const newImages = [...prev, ...droppedFiles].slice(
          ARRAY_START_INDEX,
          MAX_IMAGE_COUNT,
        );
        return newImages;
      });
    } else if (e.type === "change") {
      const inputElement = e.target as HTMLInputElement;
      const selectedFiles = inputElement.files
        ? Array.from(inputElement.files)
        : [];
      setImage((prev) => {
        const newImages = [...prev, ...selectedFiles].slice(
          ARRAY_START_INDEX,
          MAX_IMAGE_COUNT,
        );
        return newImages;
      });
    }
  }

  function handleDeleteImage(deleteFileName: string) {
    setImage((prev) => {
      return prev.filter((image) => image.name !== deleteFileName);
    });
  }

  return (
    <div style={{ width: "100%" }}>
      <Body15SB>상품 사진</Body15SB>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {images.map((image, index) => {
          return (
            <ImageThumbnail
              key={image.name + index}
              image={image}
              onClickDelete={() => handleDeleteImage(image.name)}
            />
          );
        })}
      </div>
      <AddButton onClick={() => InputRef.current?.click()} title="업로드하기" />
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        disabled={images.length >= MAX_IMAGE_COUNT}
        ref={InputRef}
        onChange={handleAddImage}
      />
    </div>
  );
};

export default ImagesInput;
