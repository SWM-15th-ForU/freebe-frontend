import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { reservation } from "product-types";
import submitStyles from "../submit.css";
import { priceFormStyles } from "./parts.css";

const TotalPriceForm = () => {
  const { watch, setValue } = useFormContext<reservation.FormType>();
  const prices = watch("options").map((option) => option.price);
  const totalPrice = watch("totalPrice");

  useEffect(() => {
    const newPrice = prices.reduce((sum, price) => sum + price, 0);
    setValue("totalPrice", newPrice);
  }, [prices, setValue]);

  return (
    <div className={submitStyles.container}>
      <div className={priceFormStyles.wrapper}>
        <span className={submitStyles.title}>총 가격</span>
        <span className={priceFormStyles.price}>{totalPrice}원</span>
      </div>
    </div>
  );
};

export default TotalPriceForm;
