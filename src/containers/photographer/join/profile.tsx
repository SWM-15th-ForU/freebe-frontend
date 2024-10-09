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
      <TextInput<Join>
        title="연락처"
        placeholder="연락처를 입력해주세요."
        formField="contact"
        multiline
        container={{ marginBottom: 10 }}
      />
      <div className={profileStyles.caption}>
        <Image src="/icons/error.svg" alt="확인" height={20} width={12} />
        <span>
          설정한 연락처는 작가님과 예약을 확정한 고객에게만 전달되며, 이후에도
          수정 가능합니다. 고객이 연락할 수 있는 수단을 등록해주세요. (전화번호,
          오픈채팅방 링크, 인스타그램 DM 등)
        </span>
      </div>
      {errors.contact && (
        <span className={profileStyles.error}>{errors.contact.message}</span>
      )}
    </div>
  );
};

export default Profile;
