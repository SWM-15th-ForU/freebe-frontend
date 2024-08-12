import TextInput from "@/components/inputs/text-input";
import { reservation } from "product-types";
import PartLayout from "../part-layout";

const CustomerInfoForm = () => {
  return (
    <PartLayout title="예약자 정보">
      <TextInput<reservation.FormType> title="성함" formField="name" />
      <TextInput<reservation.FormType> title="연락처" formField="contanct" />
      <TextInput<reservation.FormType>
        title="인스타그램 아이디"
        formField="instagram"
      />
    </PartLayout>
  );
};

export default CustomerInfoForm;
