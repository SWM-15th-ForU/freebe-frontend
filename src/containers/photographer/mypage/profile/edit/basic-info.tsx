import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { PhotographerForm } from "profile-types";
import TextInput from "@/components/inputs/text-input";
import ProfileImage from "@/components/images/profile-image";
import { CustomButton } from "@/components/buttons/common-buttons";
import { editStyles } from "./edit.css";

const BasicInfo = () => {
  const { watch, setValue } = useFormContext<PhotographerForm>();
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
          title="소개 문구"
          placeholder="소개글을 입력해 주세요."
          formField="message"
          inputSize="md"
          multiline
        />
      </div>
    </div>
  );
};

export default BasicInfo;
