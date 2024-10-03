import { use, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { reservation } from "product-types";
import CheckAgreement from "@/components/agreement/check-agreement";
import { formatPrice } from "@/utils/parse";
import submitStyles from "../submit.css";
import { priceFormStyles } from "./parts.css";

// TODO: 약관 페이지 구성 후 모달로 연결
const TotalPriceForm = ({ basicPrice }: { basicPrice: number }) => {
  const { watch, setValue } = useFormContext<reservation.FormType>();
  const [totalPrice, serviceAgreement, photographerAgreement] = watch(
    ["totalPrice", "serviceAgreement", "photographerAgreement"],
    { totalPrice: basicPrice },
  );

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
        <span className={priceFormStyles.subtitle}>기본 가격</span>
        <span className={priceFormStyles.price}>{formatPrice(basicPrice)}</span>
      </div>
      <div className={priceFormStyles.wrapper}>
        <span className={priceFormStyles.subtitle}>옵션 추가 가격</span>
        <span className={priceFormStyles.price}>
          {formatPrice(totalPrice - basicPrice)}
        </span>
      </div>
      <div className={priceFormStyles.wrapper}>
        <span className={submitStyles.title}>총 가격</span>
        <span className={priceFormStyles.total}>{formatPrice(totalPrice)}</span>
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
