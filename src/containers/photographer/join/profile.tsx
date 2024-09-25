import { useFormContext } from "react-hook-form";
import { Join } from "profile-types";
import TextInput from "@/components/inputs/text-input";
import { profileStyles } from "./join.css";

const Profile = () => {
  const {
    formState: { errors },
  } = useFormContext<Join>();

  return (
    <div>
      <TextInput<Join>
        title="아이디"
        placeholder="프리비에서 사용할 아이디를 입력해주세요."
        formField="profileName"
        container={{ margin: 0 }}
      />
      {errors.profileName && (
        <span className={profileStyles.error}>
          {errors.profileName.message}
        </span>
      )}
    </div>
  );
};

export default Profile;
