import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { reservation } from "product-types";
import TextInput from "@/components/inputs/text-input";
import { AddButton } from "@/components/buttons/common-buttons";
import ImageThumbnail from "@/components/images/image-thumbnail";
import PartLayout from "../part-layout";
import { reservationStyles } from "../../reservation.css";
import submitStyles from "../submit.css";

const RequestForm = () => {
  const router = useRouter();
  const { getValues } = useFormContext<reservation.FormType>();

  return (
    <PartLayout title="요청 사항">
      <div style={{ paddingTop: 24 }}>
        <span className={submitStyles.itemTitle}>이런 사진이 좋아요</span>
        <div className={reservationStyles.imageWrapper}>
          {getValues("referenceImages").map((image, index) => {
            return (
              <ImageThumbnail
                key={index}
                image={image.url}
                container={{ width: "32%" }}
              />
            );
          })}
        </div>
        <AddButton title="사진 수정하기" onClick={() => router.back()} />
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
