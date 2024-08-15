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
import { useRouter } from "next/navigation";
import { postReservation } from "@/services/client/customer/reservation";

const SubmitForm = ({
  name,
  items,
  options,
  phoneNumber,
  photographerId,
}: {
  name: string;
  options: Option[];
  phoneNumber: string;
  items: Item[];
  photographerId: number;
}) => {
  const router = useRouter();
  const { getValues, setValue } = useFormContext<reservation.FormType>();

  async function handleSubmit() {
    const value = getValues();
    const infos = items.map((item) => {
      return { [item.title]: item.content };
    });

    // TODO: 상품 조회 페이지에서 신청서 작성으로 넘어올 때 상품명 전달
    const reservationId = await postReservation(value, {
      infos,
      photographerId,
      productTitle: "title",
    });
    router.push(`/${reservationId}`);
  }

  useEffect(() => {
    setValue("name", name);
    setValue("contact", phoneNumber);
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
