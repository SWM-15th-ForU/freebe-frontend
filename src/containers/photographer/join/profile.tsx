import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Join } from "profile-types";
import ProfileImage from "@/components/images/profile-image";
import TextInput from "@/components/inputs/text-input";
import { CustomButton } from "@/components/buttons/common-buttons";
import { profileStyles } from "./join.css";

const Profile = ({
  setProfileImg,
}: {
  setProfileImg: Dispatch<SetStateAction<File | undefined>>;
}) => {
  const {
    formState: { errors },
  } = useFormContext<Join>();
  const [preview, setPreview] = useState<undefined | string>();

  function handleChangeProfileImg(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.files) {
      const newFile = e.currentTarget.files[0];
      setProfileImg(newFile);
      const blob = URL.createObjectURL(newFile);
      setPreview(blob);
      e.currentTarget.value = "";
    }
  }

  function handleDeleteProfileImg() {
    setProfileImg(undefined);
    setPreview(undefined);
  }

  return (
    <div className={profileStyles.container}>
      <div className={profileStyles.image}>
        <ProfileImage src={preview} />
      </div>
      <div className={profileStyles.edit}>
        <div>
          <TextInput<Join>
            title="인스타그램"
            placeholder="인스타그램 아이디를 입력해주세요."
            formField="instagramId"
            container={{ margin: 0 }}
          />
          {errors.instagramId && (
            <span className={profileStyles.error}>
              {errors.instagramId.message}
            </span>
          )}
        </div>
        <div className={profileStyles.button}>
          <CustomButton
            size="sm"
            styleType="primary"
            title="프로필 사진 등록"
            style={{
              minWidth: "fit-content",
              padding: "10px 30px",
            }}
          >
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
            styleType="line"
            title="삭제"
            onClick={handleDeleteProfileImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
