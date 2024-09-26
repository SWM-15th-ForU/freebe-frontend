import { Dispatch, SetStateAction, useRef, useState } from "react";
import { FormImage } from "product-types";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ImageThumbnail from "@/components/images/image-thumbnail";
import { getFormImageFromFiles } from "@/utils/image";
import {
  CustomButton,
  FinishButton,
} from "@/components/buttons/common-buttons";
import { modalStyles } from "@/containers/customer/products/products.css";
import { formStyles } from "../form.css";
// TODO: modal style 공통으로 옮기기

interface ImageInputProps {
  images: FormImage[];
  setImage: Dispatch<SetStateAction<FormImage[]>>;
  disabled?: boolean;
}

const ARRAY_START_INDEX = 0;
const MAX_IMAGE_COUNT = 4;

const ImagesInput = ({ images, setImage, disabled }: ImageInputProps) => {
  const InputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);

  function handleAddImage(
    e: React.DragEvent | React.ChangeEvent<HTMLInputElement>,
  ) {
    e.preventDefault();
    if (e.type === "drop") {
      const event = e as React.DragEvent;
      const droppedImages: FormImage[] = getFormImageFromFiles(
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
      const selectedImages: FormImage[] = inputElement.files
        ? getFormImageFromFiles(Array.from(inputElement.files))
        : [];
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

  function handleClickImage(clickImageIndex: number) {
    setSelectedIndex(clickImageIndex);
    open();
  }

  function handleChangeRepresentativeImage() {
    setImage((prevImages) => {
      const item = prevImages[selectedIndex];
      return [item, ...prevImages.filter((_, i) => i !== selectedIndex)];
    });
    close();
  }

  return (
    <div style={{ width: "100%" }}>
      <Modal
        onClose={close}
        opened={opened}
        classNames={{
          body: modalStyles.body,
          content: modalStyles.content,
          header: modalStyles.header,
        }}
        centered
      >
        <span className={modalStyles.title}>대표 사진을 변경하시겠어요?</span>
        <FinishButton
          title="변경하기"
          onClick={handleChangeRepresentativeImage}
        />
      </Modal>
      <span className={formStyles.subtitle}>상품 사진</span>
      <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        {images.map((image, index) => {
          return (
            <ImageThumbnail
              key={index}
              image={image.url}
              onClickDelete={
                !disabled ? () => handleDeleteImage(index) : undefined
              }
              size="20%"
              isRepresentative={index === 0}
              onClick={() => {
                if (index !== 0 && !disabled) handleClickImage(index);
              }}
            />
          );
        })}
      </div>
      {!disabled && (
        <CustomButton
          styleType="line"
          disabled={images.length >= MAX_IMAGE_COUNT}
          size="md"
          style={{ marginTop: 20 }}
          onClick={() => InputRef.current?.click()}
          title="업로드하기"
        />
      )}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={InputRef}
        onChange={handleAddImage}
      />
    </div>
  );
};

export default ImagesInput;
