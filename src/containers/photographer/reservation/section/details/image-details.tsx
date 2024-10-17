import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import { useDisclosure } from "@mantine/hooks";
import FullImage from "@/components/images/full-image";
import ImageThumbnail from "@/components/images/image-thumbnail";
import SectionLayout from "../section-layout";
import { sectionStyles } from "../section.css";

const ImageDetails = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [opened, { open, close }] = useDisclosure(false, {
    onClose: () => setSelectedIndex(-1),
  });
  const { getValues } = useFormContext<Details>();
  const [thumbnailImage, originalImage] = getValues([
    "thumbnailImage",
    "originalImage",
  ]);

  function handleFullsizeImage(index: number) {
    setSelectedIndex(index);
  }

  useEffect(() => {
    if (selectedIndex >= 0) {
      open();
    }
  }, [selectedIndex]);

  return (
    <SectionLayout title="이런 사진이 좋아요">
      <div className={sectionStyles.imageWrapper}>
        {thumbnailImage.map((image, index) => (
          <ImageThumbnail
            key={`image ${index + 1}`}
            image={image}
            size="160px"
            onClickFullsize={() => handleFullsizeImage(index)}
          />
        ))}
      </div>
      <FullImage
        opened={opened}
        onClose={close}
        imageList={originalImage}
        thumbnailList={thumbnailImage}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </SectionLayout>
  );
};

export default ImageDetails;
