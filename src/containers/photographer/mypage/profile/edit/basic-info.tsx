import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Photographer } from "profile-types";
import TextInput from "@/components/inputs/text-input";
import ProfileImage from "@/components/images/profile-image";
import { CustomButton } from "@/components/buttons/common-buttons";
import { editStyles } from "./edit.css";

const BasicInfo = () => {
  const { watch, setValue } = useFormContext<Photographer>();
  const [profileImage, imgFile] = watch(["profileImg", "imgFile"]);

  useEffect(() => {
    if (imgFile) {
      const blob = URL.createObjectURL(imgFile);
      setValue("profileImg", blob);
    }
  }, [imgFile]);

  return (
    <div className={editStyles.box}>
      <div className={editStyles.image}>
        <ProfileImage src={profileImage} />
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
            onChange={(e) => setValue("imgFile", e.currentTarget.files?.[0])}
          />
        </CustomButton>
      </div>
      <div className={editStyles.fieldsWrapper}>
        <TextInput<Photographer>
          title="인스타그램"
          formField="instagramId"
          placeholder="아이디를 입력해주세요."
          container={{ marginTop: 0 }}
        />
        <TextInput<Photographer>
          title="소개 문구"
          placeholder="작가 소개글을 입력해 주세요."
          formField="message"
          inputSize="md"
          multiline
        />
      </div>
    </div>
  );
};

export default BasicInfo;
