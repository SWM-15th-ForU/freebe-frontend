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
  // TODO: form 내부 데이터 연결
  // const images = getValues("thumbnailImage");
  const images = [
    "https://picsum.photos/600/700",
    "https://picsum.photos/500/800",
    "https://picsum.photos/200/400",
  ];

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
      <div className={sectionStyles.scheduleWrapper}>
        {images.map((image, index) => (
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
        imageList={images}
        thumbnailList={images}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </SectionLayout>
  );
};

export default ImageDetails;
