import TextInput from "@/components/common/text-input";
import { reservation } from "product-types";
import submitStyles from "./submit.css";

const CustomerInfoForm = () => {
  return (
    <div className={submitStyles.container}>
      <span className={submitStyles.title}>예약자 정보</span>
      <TextInput<reservation.FormType> title="성함" formField="name" />
      <TextInput<reservation.FormType> title="연락처" formField="contanct" />
      <TextInput<reservation.FormType>
        title="인스타그램 아이디"
        formField="instagram"
      />
    </div>
  );
};

export default CustomerInfoForm;
