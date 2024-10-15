import { useParams } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { PageParams } from "route-parameters";
import { reservation } from "product-types";
import { formatPrice } from "@/utils/parse";
import CheckBox from "@/components/inputs/checkbox";
import submitStyles from "../submit.css";
import { priceFormStyles } from "./parts.css";

const TotalPriceForm = ({ basicPrice }: { basicPrice: number }) => {
  const { productId } = useParams<Pick<PageParams, "productId">>();
  const { watch, setValue, getValues } = useFormContext<reservation.FormType>();
  const [totalPrice, photographerAgreement] = watch(
    ["totalPrice", "photographerAgreement"],
    { totalPrice: basicPrice },
  );

  function changeAgreement(target: "photographerAgreement") {
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
          checked={photographerAgreement}
          onPress={() => changeAgreement("photographerAgreement")}
          title="촬영 공지사항에 동의합니다."
        />
      </div>
    </div>
  );
};

export default TotalPriceForm;
