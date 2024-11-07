import { Dispatch, SetStateAction, useRef, useState } from "react";
import { FormImage } from "product-types";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ACCEPTED_IMAGE } from "@/constants/common/common";
import InfoCaption from "@/components/common/info-caption";
import ImageThumbnail from "@/components/images/image-thumbnail";
import { validatingFiles } from "@/utils/image";
import {
  CustomButton,
  FinishButton,
} from "@/components/buttons/common-buttons";
import popToast from "@/components/common/toast";
import { modalStyles } from "@/containers/customer/products/products.css";
import { formStyles } from "../form.css";
// TODO: modal style 공통으로 옮기기

interface ImageInputProps {
  images: FormImage[];
  setImage: Dispatch<SetStateAction<FormImage[]>>;
  disabled?: boolean;
}

const ARRAY_START_INDEX = 0;
const MAX_IMAGE_COUNT = 10;

const ImagesInput = ({ images, setImage, disabled }: ImageInputProps) => {
  const InputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);

  function getFileList(
    e: React.DragEvent | React.ChangeEvent<HTMLInputElement>,
  ) {
    if (e.type === "drop") {
      const event = e as React.DragEvent;
      return event.dataTransfer.files;
    }
    if (e.type === "change") {
      const { files } = e.target as HTMLInputElement;
      return files;
    }
    return null;
  }

  function handleAddImage(
    e: React.DragEvent | React.ChangeEvent<HTMLInputElement>,
  ) {
    e.preventDefault();
    const selectedFiles = getFileList(e);
    const { isOver, selectedImages } = validatingFiles(selectedFiles);
    if (isOver) {
      popToast("10MB 이하의 이미지만 등록할 수 있습니다.");
    }
    if (selectedImages.length > 0) {
      setImage((prev) => {
        const newImages = [...prev, ...selectedImages];
        if (newImages.length > MAX_IMAGE_COUNT) {
          popToast("이미지는 최대 10개까지 등록할 수 있습니다.");
        }
        return newImages.slice(ARRAY_START_INDEX, MAX_IMAGE_COUNT);
      });
    }
    if (e.type === "change") {
      const input = e.target as HTMLInputElement;
      input.value = "";
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
      {!disabled && (
        <>
          <InfoCaption
            information="업로드하기 전, 포트폴리오로 사용할 수 있는 사진인지 확인해주세요.
          도용 및 무단 사용된 이미지는 삭제될 수 있습니다."
          />
          <InfoCaption information={ACCEPTED_IMAGE.info} />
        </>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        {images.map((image, index) => {
          return (
            <ImageThumbnail
              key={index}
              image={image.url}
              container={{ minWidth: 100 }}
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
        multiple
        accept={ACCEPTED_IMAGE.file}
        style={{ display: "none" }}
        ref={InputRef}
        onChange={handleAddImage}
      />
    </div>
  );
};

export default ImagesInput;
