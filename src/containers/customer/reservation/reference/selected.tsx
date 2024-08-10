import { BLUE03, LIGHTGREY01 } from "@/styles/colors";
import { texts } from "@/styles/text.css";
import CloseButton from "@/components/buttons/close-button";
import Image from "next/image";
import { reservation } from "product-types";
import { SelectedStyles } from "./reference.css";

const ReferenceSelected = ({
  images,
  onClickDelete,
}: {
  images: reservation.SelectedImageListType[];
  onClickDelete: (index: number) => void;
}) => {
  return (
    <div
      style={{
        padding: 20,
        borderBottomWidth: 8,
        borderColor: LIGHTGREY01,
        borderBottomStyle: "solid",
      }}
    >
      <span className={texts.body1} style={{ color: BLUE03 }}>
        최대 3장 선택 가능하며, 고른 사진은 작가님께 촬영용 레퍼런스로 전달돼요.
      </span>
      <div className={SelectedStyles.imageWrapper}>
        {images.map((image, index) => {
          // TODO: ImageThumbnail과 통합하여 분리
          return (
            <div
              key={index}
              style={{
                width: "32%",
                aspectRatio: 1,
                position: "relative",
                marginTop: 15,
              }}
            >
              <CloseButton onClick={() => onClickDelete(image.index)} />
              <Image src={image.url} alt={image.url} fill />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReferenceSelected;
