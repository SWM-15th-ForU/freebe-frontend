import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { reservation } from "product-types";
import CheckAgreement from "@/components/agreement/check-agreement";
import submitStyles from "../submit.css";
import { priceFormStyles } from "./parts.css";

// TODO: 약관 페이지 구성 후 모달로 연결
const TotalPriceForm = () => {
  const { watch, setValue } = useFormContext<reservation.FormType>();
  const prices = watch("options").map((option) => option.price);
  const [totalPrice, serviceAgreement, photographerAgreement] = watch([
    "totalPrice",
    "serviceAgreement",
    "photographerAgreement",
  ]);

  useEffect(() => {
    const newPrice = prices.reduce((sum, price) => sum + price, 0);
    if (newPrice !== totalPrice) {
      setValue("totalPrice", newPrice);
    }
  }, [prices]);

  function changeAgreement(type: "service" | "photographer") {
    if (type === "service") {
      setValue("serviceAgreement", !serviceAgreement);
    } else {
      setValue("photographerAgreement", !photographerAgreement);
    }
  }

  return (
    <div className={submitStyles.container}>
      <div className={priceFormStyles.wrapper}>
        <span className={submitStyles.title}>총 가격</span>
        <span className={priceFormStyles.price}>{totalPrice}원</span>
      </div>
      <CheckAgreement
        checked={photographerAgreement}
        onPressCheckbox={() => changeAgreement("photographer")}
        title="작가 약관 동의"
        link={{ name: "작가 약관 확인하기", path: "/" }}
      />
      <CheckAgreement
        checked={serviceAgreement}
        onPressCheckbox={() => changeAgreement("service")}
        title="서비스 약관 동의"
        link={{ name: "서비스 약관 확인하기", path: "/" }}
      />
    </div>
  );
};

export default TotalPriceForm;
