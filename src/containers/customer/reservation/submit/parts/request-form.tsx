import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { reservation } from "product-types";
import TextInput from "@/components/inputs/text-input";
import PartLayout from "../part-layout";
import { reservationStyles } from "../../reservation.css";
import submitStyles from "../submit.css";

const RequestForm = () => {
  const { getValues } = useFormContext<reservation.FormType>();

  return (
    <PartLayout title="요청 사항">
      <div style={{ paddingTop: 24 }}>
        <span className={submitStyles.itemTitle}>이런 사진이 좋아요</span>
        <div className={reservationStyles.imageWrapper}>
          {getValues("referenceImages").map((image, index) => {
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
              </div>
            );
          })}
        </div>
      </div>
      <TextInput<reservation.FormType>
        placeholder="작가님께 전달하고 싶은 말이 있거나, 궁금한 내용이 있다면 편하게 작성해주세요."
        title="요청 메모"
        formField="memo"
        multiline
      />
    </PartLayout>
  );
};

export default RequestForm;
