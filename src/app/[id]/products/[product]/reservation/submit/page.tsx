"use client";

import { BottomButton } from "@/components/buttons/common-buttons";
import CustomerInfoForm from "@/containers/customer/reservation/submit/customer-info-form";
import ProductInfoForm from "@/containers/customer/reservation/submit/product-info-form";
import { useFormContext } from "react-hook-form";

const SubmitPage = () => {
  const datas = {
    items: [
      { title: "기본 가격", content: "160,000원", hasDescription: false },
    ],
  };

  const { getValues } = useFormContext();

  function handleSubmit() {
    const value = getValues();
  }

  return (
    <div style={{ backgroundColor: "#F4F8FD" }}>
      <CustomerInfoForm />
      <ProductInfoForm items={datas.items} />
      <BottomButton title="신청하기" onClick={handleSubmit} />
    </div>
  );
};

export default SubmitPage;
