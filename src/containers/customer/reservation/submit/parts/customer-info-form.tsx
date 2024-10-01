import TextInput from "@/components/inputs/text-input";
import { reservation } from "product-types";
import PartLayout from "../part-layout";

const CustomerInfoForm = ({
  name,
  phoneNumber,
  instagramId,
}: {
  name: string;
  phoneNumber: string;
  instagramId: string;
}) => {
  return (
    <PartLayout title="예약자 정보">
      <TextInput<reservation.FormType>
        title="성함"
        formField="name"
        value={name}
        disabled
      />
      <TextInput<reservation.FormType>
        title="연락처"
        formField="contact"
        value={phoneNumber}
        type="tel"
        disabled
      />
      <TextInput<reservation.FormType>
        title="인스타그램 아이디"
        formField="instagram"
        value={instagramId}
      />
    </PartLayout>
  );
};

export default CustomerInfoForm;
