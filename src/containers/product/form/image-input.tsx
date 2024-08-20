import { Image } from "product-types";
import { Dispatch, SetStateAction, useRef } from "react";
import { AddButton } from "@/components/buttons/common-buttons";
import ImageThumbnail from "@/components/common/image-thumbnail";
import { Body15SB } from "@/components/texts/texts";
import { getUrlFromFiles } from "@/utils/image";
import { formStyles } from "../product.css";

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
      const droppedImages = getUrlFromFiles(
        Array.from(event.dataTransfer.files),
      );
      setImage((prev) => {
        const newImages = [...prev, ...droppedImages].slice(
          ARRAY_START_INDEX,
          MAX_IMAGE_COUNT,
        );
        return newImages;
      });
    } else if (e.type === "change") {
      const inputElement = e.target as HTMLInputElement;
      const selectedImages = getUrlFromFiles(
        inputElement.files ? Array.from(inputElement.files) : [],
      );
      setImage((prev) => {
        const newImages = [...prev, ...selectedImages].slice(
          ARRAY_START_INDEX,
          MAX_IMAGE_COUNT,
        );
        return newImages;
      });
    }
  }

  function handleDeleteImage(deleteImageIndex: number) {
    setImage((prev) => {
      return prev.filter((_, index) => index !== deleteImageIndex);
    });
  }

  return (
    <div style={{ width: "100%" }}>
      <span className={formStyles.subtitle}>상품 사진</span>
      <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        {images.map((image, index) => {
          return (
            <ImageThumbnail
              key={index}
              image={image}
              onClickDelete={() => handleDeleteImage(index)}
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
