"use client";

import { BottomButton } from "@/components/buttons/common-buttons";
import CustomerInfoForm from "@/containers/customer/reservation/submit/customer-info-form";
import { useFormContext } from "react-hook-form";

const SubmitPage = () => {
  const { register } = useFormContext();

  return (
    <div>
      <CustomerInfoForm />
      <BottomButton title="신청하기" onClick={() => {}} />
    </div>
  );
};

export default SubmitPage;
