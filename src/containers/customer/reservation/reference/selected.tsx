import { FormImage } from "product-types";
import { BLUE03, LIGHTGREY01 } from "@/styles/colors";
import { texts } from "@/styles/text.css";
import ImageThumbnail from "@/components/images/image-thumbnail";
import { reservationStyles } from "../reservation.css";

const REFERENCE_LENGTH = 3;

// TODO: vanilla extract 디자인 시스템 통합
const ReferenceSelected = ({
  images,
  onClickDelete,
}: {
  images: FormImage[];
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
      <span className={texts["body-01"]} style={{ color: BLUE03 }}>
        내가 원하는 분위기와 비슷한 사진을 최소 1장, 최대 3장 선택할 수 있어요.
        고른 사진은 작가님께 촬영용 레퍼런스로 전달돼요.
      </span>
      <div className={reservationStyles.imageWrapper}>
        {images
          .concat(Array(REFERENCE_LENGTH - images.length).fill(undefined))
          .map((item, index) => {
            return (
              <ImageThumbnail
                key={index}
                image={item && item.url}
                container={{ width: "32%" }}
                onClickDelete={item ? () => onClickDelete(index) : undefined}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ReferenceSelected;
