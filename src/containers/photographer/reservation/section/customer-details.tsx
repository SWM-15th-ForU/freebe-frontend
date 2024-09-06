import Field from "./field";
import { sectionStyles } from "./section.css";

const CustomerDetails = () => {
  return (
    <div className={sectionStyles.container}>
      <span className={sectionStyles.title}>신청자 정보</span>
      <div className={sectionStyles.wrapper}>
        <Field name="이름" formField="customer.name" />
        <Field name="전화번호" formField="customer.phoneNumber" />
        <Field name="인스타그램 아이디" formField="customer.instagramId" />
      </div>
    </div>
  );
};

export default CustomerDetails;
