import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import ImageThumbnail from "@/components/common/image-thumbnail";
import SectionLayout from "./section-layout";
import { sectionStyles } from "./section.css";

const ImageDetails = () => {
  const { getValues } = useFormContext<Details>();
  // const images = getValues("thumbnailImage");
  const images = [
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/400",
  ];

  return (
    <SectionLayout title="이런 사진이 좋아요">
      <div className={sectionStyles.scheduleWrapper}>
        {images.map((image, index) => (
          <ImageThumbnail
            key={`image ${index + 1}`}
            image={image}
            size="160px"
            onClickFullsize={() => {}}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ImageDetails;
