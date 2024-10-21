import { useFormContext } from "react-hook-form";
import { Join } from "profile-types";
import Checkbox from "@/components/inputs/checkbox";
import {
  AGREEMENT_LINKS,
  MARKETING_AGREEMENT,
  PRIVACY_AGREEMENT,
  SERVICE_AGREEMENT,
} from "@/constants/common/agreement";
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

  // TODO: 약관 조회 방식 결정 후 주석 제거

  return (
    <div className={agreementStyles.container}>
      <div className={agreementStyles.totalWrapper}>
        <Checkbox
          checked={serviceAgreement && privacyAgreement && marketingAgreement}
          onPress={handleTotalToggle}
        >
          <span className={agreementStyles.total}>모두 동의합니다.</span>
        </Checkbox>
      </div>
      <Checkbox
        checked={serviceAgreement}
        onPress={() => handleAgreementToggle("serviceAgreement")}
        title="서비스 이용약관에 동의합니다. (필수)"
        link={{ name: "전체 보기", path: AGREEMENT_LINKS.service }}
      />
      {/* <div className={agreementStyles.box}>{SERVICE_AGREEMENT}</div> */}
      <Checkbox
        checked={privacyAgreement}
        onPress={() => handleAgreementToggle("privacyAgreement")}
        title="개인정보 수집/이용에 동의합니다. (필수)"
        link={{ name: "전체 보기", path: AGREEMENT_LINKS.privacy }}
      />
      {/* <div className={agreementStyles.box}>{PRIVACY_AGREEMENT}</div> */}
      <div>
        <Checkbox
          checked={marketingAgreement}
          onPress={() => handleAgreementToggle("marketingAgreement")}
          title="마케팅 수신/홍보 목적의 개인정보 수집 및 이용에 동의합니다. (선택)"
          // link={{ name: "전체 보기", path: AGREEMENT_LINKS.service }}
        />
        {/* <div className={agreementStyles.box}>{MARKETING_AGREEMENT}</div> */}
      </div>
    </div>
  );
};

export default Agreements;
