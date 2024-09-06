import SectionLayout from "./section-layout";
import Field from "./fields/field";
import { sectionStyles } from "./section.css";

const CustomerDetails = () => {
  return (
    <SectionLayout title="신청자 정보">
      <div className={sectionStyles.wrapper}>
        <Field name="이름" formField="customer.name" />
        <Field name="전화번호" formField="customer.phoneNumber" />
        <Field name="인스타그램 아이디" formField="customer.instagramId" />
      </div>
    </SectionLayout>
  );
};

export default CustomerDetails;
