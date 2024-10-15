"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Product, reservation } from "product-types";
import { BottomButton } from "@/components/buttons/common-buttons";
import CustomerInfoForm from "@/containers/customer/reservation/submit/parts/customer-info-form";
import ProductInfoForm from "@/containers/customer/reservation/submit/parts/product-info-form";
import RequestForm from "@/containers/customer/reservation/submit/parts/request-form";
import SelectOptionForm from "@/containers/customer/reservation/submit/parts/select-option-form";
import TotalPriceForm from "@/containers/customer/reservation/submit/parts/total-price-form";
import { reservationStyles } from "./reservation.css";

const SubmitForm = ({
  contact,
  instagram,
  name,
  productId,
  profileName,
  items,
  options,
  basicPrice,
  basicPlace,
  allowPreferredPlace,
}: Pick<
  reservation.FormType,
  "contact" | "instagram" | "name" | "productId" | "profileName"
> &
  Pick<
    Product,
    "basicPlace" | "allowPreferredPlace" | "items" | "options" | "basicPrice"
  >) => {
  const {
    setValue,
    watch,
    formState: { touchedFields },
  } = useFormContext<reservation.FormType>();
  const [totalPrice, noticeAgreement] = watch([
    "totalPrice",
    "noticeAgreement",
  ]);

  useEffect(() => {
    setValue("name", name);
    setValue("contact", contact);
    setValue("profileName", profileName);
    setValue("productId", productId);
    if (!touchedFields.instagram) {
      setValue("instagram", instagram);
    }
  }, [name, contact, items, profileName, productId]);

  const prices = watch("options").map((option) => option.price);

  useEffect(() => {
    const newPrice = prices.reduce((sum, price) => sum + price, 0) + basicPrice;
    if (newPrice !== totalPrice) {
      setValue("totalPrice", newPrice);
    }
  }, [prices, basicPrice]);

  return (
    <div
      className={reservationStyles.container}
      style={{
        backgroundColor: "#F4F8FD",
      }}
    >
      <CustomerInfoForm />
      <ProductInfoForm
        items={items}
        basicPrice={basicPrice}
        allowPreferredPlace={allowPreferredPlace}
        basicPlace={basicPlace}
      />
      <RequestForm />
      <SelectOptionForm options={options} />
      <TotalPriceForm basicPrice={basicPrice} />
      <BottomButton
        title="신청하기"
        type="submit"
        disabled={!noticeAgreement}
      />
    </div>
  );
};

export default SubmitForm;
