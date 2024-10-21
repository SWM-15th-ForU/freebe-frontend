import { useFormContext } from "react-hook-form";
import { reservation } from "product-types";
import TextInput from "@/components/inputs/text-input";
import PartLayout from "../part-layout";
import { errorStyle } from "./parts.css";

const CustomerInfoForm = () => {
  const {
    formState: { errors },
  } = useFormContext<reservation.FormType>();
  return (
    <PartLayout title="예약자 정보">
      <TextInput<reservation.FormType> title="성함" formField="name" disabled />
      <TextInput<reservation.FormType>
        title="연락처"
        formField="contact"
        type="tel"
        disabled
      />
      <TextInput<reservation.FormType>
        title="인스타그램 아이디"
        formField="instagram"
        container={{ marginBottom: 8 }}
      />
      {errors.instagram && (
        <span className={errorStyle}>{errors.instagram.message}</span>
      )}
    </PartLayout>
  );
};

export default CustomerInfoForm;
