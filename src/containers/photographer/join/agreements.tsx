import { useFormContext } from "react-hook-form";
import { Join } from "profile-types";
import Checkbox from "@/components/inputs/checkbox";
import { agreementStyles } from "./join.css";

const Agreements = () => {
  const { setValue, getValues, watch } = useFormContext<Join>();
  const [serviceAgreement, privacyAgreement, marketingAgreement] = watch([
    "serviceAgreement",
    "privacyAgreement",
    "marketingAgreement",
  ]);

  function handleTotalToggle() {
    const currentAgreement =
      serviceAgreement && privacyAgreement && marketingAgreement;
    setValue("serviceAgreement", !currentAgreement);
    setValue("privacyAgreement", !currentAgreement);
    setValue("marketingAgreement", !currentAgreement);
  }

  function handleAgreementToggle(
    agreement: "serviceAgreement" | "privacyAgreement" | "marketingAgreement",
  ) {
    const currentAgreement = getValues(agreement);
    setValue(agreement, !currentAgreement);
  }

  // TODO: 실제 약관 데이터 연결
  const agreement =
    "이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관 이용 약관";

  return (
    <div className={agreementStyles.container}>
      <div className={agreementStyles.total}>
        <Checkbox
          value={serviceAgreement && privacyAgreement && marketingAgreement}
          onPress={handleTotalToggle}
        />
        <span>모두 동의합니다.</span>
      </div>
      <div>
        <div className={agreementStyles.wrapper}>
          <Checkbox
            value={serviceAgreement}
            onPress={() => handleAgreementToggle("serviceAgreement")}
          />
          <span>서비스 이용약관에 동의합니다. (필수)</span>
        </div>
        <div className={agreementStyles.box}>{agreement}</div>
      </div>
      <div>
        <div className={agreementStyles.wrapper}>
          <Checkbox
            value={privacyAgreement}
            onPress={() => handleAgreementToggle("privacyAgreement")}
          />
          <span>개인정보 수집/이용에 동의합니다. (필수)</span>
        </div>
        <div className={agreementStyles.box}>{agreement}</div>
      </div>
      <div>
        <div className={agreementStyles.wrapper}>
          <Checkbox
            value={marketingAgreement}
            onPress={() => handleAgreementToggle("marketingAgreement")}
          />
          <span>
            마케팅 수신/홍보 목적의 개인정보 수집 및 이용에 동의합니다. (선택)
          </span>
        </div>
        <div className={agreementStyles.box}>{agreement}</div>
      </div>
    </div>
  );
};

export default Agreements;
