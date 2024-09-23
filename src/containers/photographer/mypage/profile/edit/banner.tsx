import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { Photographer } from "profile-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import { editStyles } from "./edit.css";

const Banner = () => {
  const { setValue, register } = useFormContext<Photographer>();

  function handleDeleteBanner() {
    setValue("bannerFile", undefined);
    setValue("banner", undefined);
  }

  function handleChangeBanner(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.files) {
      const newFile = e.currentTarget.files[0];
      setValue("bannerFile", newFile);
      const blob = URL.createObjectURL(newFile);
      setValue("banner", blob);
    }
  }

  return (
    <div className={editStyles.box}>
      <span className={editStyles.title}>배너 이미지</span>
      <div className={editStyles.buttonsWrapper}>
        <CustomButton
          title="삭제"
          styleType="line"
          size="xs"
          onClick={handleDeleteBanner}
        />
        <CustomButton title="등록" styleType="primary" size="xs">
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
            {...register("bannerFile")}
            onChange={handleChangeBanner}
          />
        </CustomButton>
      </div>
    </div>
  );
};

export default Banner;
