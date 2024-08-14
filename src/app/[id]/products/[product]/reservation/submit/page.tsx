"use client";

import { BottomButton } from "@/components/buttons/common-buttons";
import CustomerInfoForm from "@/containers/customer/reservation/submit/parts/customer-info-form";
import ProductInfoForm from "@/containers/customer/reservation/submit/parts/product-info-form";
import RequestForm from "@/containers/customer/reservation/submit/parts/request-form";
import SelectOptionForm from "@/containers/customer/reservation/submit/parts/select-option-form";
import { Item, Option } from "product-types";
import { useFormContext } from "react-hook-form";

const SubmitPage = () => {
  const datas: {
    items: Item[];
    options: Option[];
  } = {
    items: [
      { title: "기본 가격", content: "160,000원", hasDescription: false },
    ],
    options: [
      { title: "옵션1", hasDescription: false, isFree: false, price: 10000 },
      { title: "옵션2", hasDescription: false, isFree: true },
    ],
  };

  const { getValues } = useFormContext();

  function handleSubmit() {
    const value = getValues();
    console.log(value);
  }

  return (
    <div
      style={{
        backgroundColor: "#F4F8FD",
        paddingBottom: 72,
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <CustomerInfoForm />
      <ProductInfoForm items={datas.items} />
      <SelectOptionForm options={datas.options} />
      <RequestForm />
      <BottomButton title="신청하기" onClick={handleSubmit} />
    </div>
  );
};

export default SubmitPage;
