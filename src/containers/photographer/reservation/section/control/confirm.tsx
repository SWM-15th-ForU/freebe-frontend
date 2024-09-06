import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import OptionField from "../fields/option-field";
import { sectionStyles } from "../section.css";

const Confirm = () => {
  const { watch } = useFormContext<Details>();
  const options = watch("options");
  const prices = options.map((option) => option.price);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newPrice = prices.reduce((sum, price) => sum + price, 0);
    if (newPrice !== totalPrice) {
      setTotalPrice(newPrice);
    }
  }, [prices, totalPrice]);

  return (
    <div>
      <span className={sectionStyles.message}>
        확인 후 수락을 결정해 주세요.
      </span>
      <div className={sectionStyles.box}>
        <div className={sectionStyles.divider}>
          <span className={sectionStyles.title}>추가 옵션</span>
          <div className={sectionStyles.optionWrapper}>
            {options.map((option, index) => (
              <OptionField key={option.title} optionIndex={index} />
            ))}
          </div>
        </div>
        <div className={sectionStyles.priceWrapper}>
          <span className={sectionStyles.title}>총 가격</span>
          <span className={sectionStyles.price}>{totalPrice}원</span>
        </div>
        <div className={sectionStyles.buttonWrapper}>
          <CustomButton
            title="수락하기"
            onClick={() => {}}
            styleType="primary"
            size="sm"
          />
          <CustomButton
            title="거절하기"
            onClick={() => {}}
            styleType="secondary"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
