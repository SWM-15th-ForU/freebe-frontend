import Image from "next/image";
import { BLUE03, LIGHTGREY01 } from "@/styles/colors";
import { texts } from "@/styles/text.css";
import CloseButton from "@/components/buttons/close-button";
import { reservationStyles } from "../reservation.css";

// TODO: vanilla extract 디자인 시스템 통합
const ReferenceSelected = ({
  images,
  onClickDelete,
}: {
  images: string[];
  onClickDelete: (value: string) => void;
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
        최소 1장, 최대 3장 선택해 주세요. 고른 사진은 작가님께 촬영용 레퍼런스로
        전달돼요.
      </span>
      <div className={reservationStyles.imageWrapper}>
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
              <Image src={image} alt={image} fill />
              <CloseButton
                onClick={() => onClickDelete(image)}
                styleType="shadow"
                container={{ padding: 4, justifyContent: "flex-end" }}
                size={24}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReferenceSelected;
