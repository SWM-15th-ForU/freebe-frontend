"use client";

import { useFormContext } from "react-hook-form";
import { BottomButton } from "@/components/buttons/common-buttons";
import CustomerInfoForm from "@/containers/customer/reservation/submit/parts/customer-info-form";
import ProductInfoForm from "@/containers/customer/reservation/submit/parts/product-info-form";
import RequestForm from "@/containers/customer/reservation/submit/parts/request-form";
import SelectOptionForm from "@/containers/customer/reservation/submit/parts/select-option-form";
import TotalPriceForm from "@/containers/customer/reservation/submit/parts/total-price-form";
import { Item, Option, reservation } from "product-types";
import { useEffect } from "react";

const SubmitForm = ({
  name,
  items,
  options,
  phoneNumber,
}: {
  name: string;
  options: Option[];
  phoneNumber: string;
  items: Item[];
}) => {
  const { getValues, setValue } = useFormContext<reservation.FormType>();

  function handleSubmit() {
    const value = getValues();
    console.log(value);
  }

  useEffect(() => {
    setValue("name", name);
    setValue("contanct", phoneNumber);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F4F8FD",
        paddingBottom: 72,
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <CustomerInfoForm name={name} phoneNumber={phoneNumber} />
      <ProductInfoForm items={items} />
      <SelectOptionForm options={options} />
      <RequestForm />
      <TotalPriceForm />
      <BottomButton title="신청하기" onClick={handleSubmit} />
    </div>
  );
};

export default SubmitForm;
