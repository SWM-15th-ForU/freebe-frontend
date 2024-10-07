import { useFormContext } from "react-hook-form";
import { reservation } from "product-types";
import { formatPrice } from "@/utils/parse";
import CheckBox from "@/components/inputs/checkbox";
import { AGREEMENT_LINKS } from "@/constants/common/agreement";
import submitStyles from "../submit.css";
import { priceFormStyles } from "./parts.css";

// TODO: 약관 페이지 구성 후 모달로 연결
const TotalPriceForm = ({ basicPrice }: { basicPrice: number }) => {
  const { watch, setValue, getValues } = useFormContext<reservation.FormType>();
  const [totalPrice, serviceAgreement, photographerAgreement, ageAgreement] =
    watch(
      [
        "totalPrice",
        "serviceAgreement",
        "photographerAgreement",
        "ageAgreement",
      ],
      { totalPrice: basicPrice },
    );

  function changeAgreement(
    target: "serviceAgreement" | "photographerAgreement" | "ageAgreement",
  ) {
    const currentValue = getValues(target);
    setValue(target, !currentValue);
  }

  return (
    <div className={submitStyles.container}>
      <div className={priceFormStyles.wrapper}>
        <span className={submitStyles.title}>총 가격</span>
        <span className={priceFormStyles.total}>{formatPrice(totalPrice)}</span>
      </div>
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
      <div className={priceFormStyles.agreementWrapper}>
        <CheckBox
          checked={ageAgreement}
          onPress={() => {
            changeAgreement("ageAgreement");
          }}
          title="만 14세 이상입니다."
        />
        <CheckBox
          checked={photographerAgreement}
          onPress={() => changeAgreement("photographerAgreement")}
          title="작가 약관 동의"
          link={{ name: "작가 약관 확인하기", path: "/" }}
        />
        <CheckBox
          checked={serviceAgreement}
          onPress={() => changeAgreement("serviceAgreement")}
          title="서비스 약관 동의"
          link={{ name: "서비스 약관 확인하기", path: AGREEMENT_LINKS.service }}
        />
      </div>
    </div>
  );
};

export default TotalPriceForm;
