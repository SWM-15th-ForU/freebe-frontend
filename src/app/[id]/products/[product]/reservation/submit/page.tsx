"use client";

import { BottomButton } from "@/components/buttons/common-buttons";
import CustomerInfoForm from "@/containers/customer/reservation/submit/customer-info-form";
import { useFormContext } from "react-hook-form";

const SubmitPage = () => {
  const { register, getValues } = useFormContext();

  function handleSubmit() {
    const value = getValues();
  }

  return (
    <div style={{ backgroundColor: "#F4F8FD" }}>
      <CustomerInfoForm />
      <BottomButton title="신청하기" onClick={handleSubmit} />
    </div>
  );
};

export default SubmitPage;
