import Image from "next/image";
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
        container={{ marginBottom: 10 }}
      />
      <div className={profileStyles.caption}>
        <Image src="/icons/error.svg" alt="확인" height={20} width={12} />
        <span>
          설정한 아이디는 고객에게 노출되며, 설정한 이후에 변경이 불가능합니다.
        </span>
      </div>
      {errors.profileName && (
        <span className={profileStyles.error}>
          {errors.profileName.message}
        </span>
      )}
    </div>
  );
};

export default Profile;
