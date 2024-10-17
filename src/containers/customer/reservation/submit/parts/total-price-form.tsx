import { useFormContext } from "react-hook-form";
import { reservation } from "product-types";
import { useDisclosure } from "@mantine/hooks";
import CheckBox from "@/components/inputs/checkbox";
import { formatPrice } from "@/utils/parse";
import submitStyles from "../submit.css";
import NoticeModal from "./notices-modal";
import { priceFormStyles } from "./parts.css";

const TotalPriceForm = ({ basicPrice }: { basicPrice: number }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { watch, setValue } = useFormContext<reservation.FormType>();
  const [totalPrice, noticeAgreement] = watch(
    ["totalPrice", "noticeAgreement"],
    { totalPrice: basicPrice },
  );

  function onClickAgreement() {
    if (noticeAgreement) {
      setValue("noticeAgreement", false);
    } else {
      open();
    }
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
          checked={noticeAgreement}
          onPress={onClickAgreement}
          title="촬영 공지사항에 동의합니다."
        />
        <NoticeModal
          opened={opened}
          close={close}
          onAgree={() => {
            setValue("noticeAgreement", true);
            close();
          }}
        />
      </div>
    </div>
  );
};

export default TotalPriceForm;
