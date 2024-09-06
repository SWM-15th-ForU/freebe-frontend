import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Modal } from "@mantine/core";
import CloseButton from "../buttons/close-button";
import ImageThumbnail from "./image-thumbnail";
import { fullStyles } from "./images.css";

const FullImage = ({
  opened,
  onClose,
  imageList,
  thumbnailList,
  selectedIndex,
  setSelectedIndex,
}: {
  opened: boolean;
  onClose: () => void;
  imageList: string[];
  thumbnailList: string[];
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      classNames={{ ...fullStyles }}
      withCloseButton={false}
    >
      <CloseButton
        onClick={onClose}
        size={36}
        styleType="shadow"
        container={{ justifyContent: "flex-end" }}
      />
      <div className={fullStyles.main}>
        <button
          type="button"
          className={
            selectedIndex === 0 ? fullStyles.disabledMove : fullStyles.move
          }
          disabled={selectedIndex === 0}
          onClick={() => setSelectedIndex((prev) => prev - 1)}
        >
          <Image
            src="/icons/right-white.svg"
            width={28}
            height={52}
            alt="이전"
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
        <div className={fullStyles.imageContainer}>
          <img
            src={imageList[selectedIndex]}
            alt={`full size ${selectedIndex + 1}`}
            className={fullStyles.image}
          />
        </div>
        <button
          type="button"
          className={
            selectedIndex === imageList.length - 1
              ? fullStyles.disabledMove
              : fullStyles.move
          }
          disabled={selectedIndex === imageList.length - 1}
          onClick={() => setSelectedIndex((prev) => prev + 1)}
        >
          <Image
            src="/icons/right-white.svg"
            width={28}
            height={52}
            alt="다음"
          />
        </button>
      </div>
      <div className={fullStyles.wrapper}>
        {thumbnailList.map((thumbnail, index) => (
          <ImageThumbnail
            image={thumbnail}
            key={`thumbnail ${index + 1}`}
            container={{
              border: index === selectedIndex ? "2px solid white" : "none",
            }}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </Modal>
  );
};

export default FullImage;
