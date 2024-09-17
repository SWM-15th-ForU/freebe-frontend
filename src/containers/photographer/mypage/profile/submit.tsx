import { CustomButton } from "@/components/buttons/common-buttons";
import { profileStyles } from "./profile.css";

const SubmitProfile = () => {
  return (
    <div className={profileStyles.submit}>
      <CustomButton
        type="submit"
        styleType="primary"
        size="sm"
        title="프로필 저장"
        style={{ marginLeft: "auto", marginRight: 32, width: 96 }}
      />
    </div>
  );
};

export default SubmitProfile;
