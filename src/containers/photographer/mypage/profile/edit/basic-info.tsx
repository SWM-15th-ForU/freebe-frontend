import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { PhotographerForm } from "profile-types";
import InfoCaption from "@/components/common/info-caption";
import TextInput from "@/components/inputs/text-input";
import ProfileImage from "@/components/images/profile-image";
import { CustomButton } from "@/components/buttons/common-buttons";
import { editStyles } from "./edit.css";

const BasicInfo = () => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<PhotographerForm>();
  const profileImg = watch("profileImg");

  function handleChangeProfileImg(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.files) {
      const newFile = e.currentTarget.files[0];
      const blob = URL.createObjectURL(newFile);
      setValue("profileImg", { url: blob, file: newFile });
    }
    e.currentTarget.value = "";
  }

  function handleDeleteProfileImg() {
    setValue("profileImg", undefined);
  }

  return (
    <div className={editStyles.box}>
      <div className={editStyles.image}>
        <ProfileImage src={profileImg?.url} />
        <CustomButton size="sm" title="프로필 사진 등록" styleType="primary">
          <input
            type="file"
            accept="image/*"
            style={{
              opacity: 0,
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              cursor: "pointer",
            }}
            onChange={handleChangeProfileImg}
          />
        </CustomButton>
        <CustomButton
          size="sm"
          title="삭제"
          styleType="line"
          disabled={profileImg === undefined}
          onClick={handleDeleteProfileImg}
        />
      </div>
      <div className={editStyles.fieldsWrapper}>
        <TextInput<PhotographerForm>
          title="아이디"
          formField="profileName"
          disabled
          container={{ marginTop: 0 }}
        />
        <TextInput<PhotographerForm>
          title="연락처"
          placeholder="고객이 연락할 수 있는 수단을 입력해주세요."
          formField="contact"
          multiline
          container={{ marginBottom: 10 }}
        />
        <InfoCaption
          information="설정한 연락처는(전화번호, 카카오톡 채팅방 링크, 인스타그램 아이디
            등) 작가님께서 예약을 수락하신 고객에게만 전달됩니다."
        />
        {errors.contact && (
          <span className={editStyles.error}>{errors.contact.message}</span>
        )}
        <TextInput<PhotographerForm>
          title="소개 문구"
          placeholder="소개글을 입력해 주세요."
          formField="message"
          inputSize="md"
          multiline
        />
        {errors.message && (
          <span className={editStyles.error}>{errors.message.message}</span>
        )}
      </div>
    </div>
  );
};

export default BasicInfo;
