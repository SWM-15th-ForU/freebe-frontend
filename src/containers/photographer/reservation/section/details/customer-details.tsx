import Image from "next/image";
import SectionLayout from "../section-layout";
import Field from "../fields/field";
import { sectionStyles } from "../section.css";

const CustomerDetails = ({
  isDisableToAccess,
}: {
  isDisableToAccess: boolean;
}) => {
  return (
    <SectionLayout title="신청자 정보">
      <div
        className={
          isDisableToAccess ? sectionStyles.blur : sectionStyles.wrapper
        }
      >
        <Field name="이름" formField="customer.name" />
        <Field name="전화번호" formField="customer.phoneNumber" />
        <Field name="인스타그램 아이디" formField="customer.instagramId" />
      </div>
      {isDisableToAccess && (
        <div className={sectionStyles.blurMessage}>
          <Image src="/icons/error.svg" alt="안내" width={14} height={14} />
          <span>신청자 정보를 확인하려면 예약을 수락해주세요!</span>
        </div>
      )}
    </SectionLayout>
  );
};

export default CustomerDetails;
