import { CustomButton } from "@/components/buttons/common-buttons";
import { Photographer } from "profile-types";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { editStyles } from "./edit.css";

const Banner = () => {
  const { watch, setValue } = useFormContext<Photographer>();
  const bannerFile = watch("bannerFile");

  useEffect(() => {
    if (bannerFile) {
      const blob = URL.createObjectURL(bannerFile);
      setValue("banner", blob);
    } else {
      setValue("banner", undefined);
    }
  }, [bannerFile]);

  function handleDeleteBanner() {
    setValue("bannerFile", undefined);
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
            onChange={(e) => setValue("bannerFile", e.currentTarget.files?.[0])}
          />
        </CustomButton>
      </div>
    </div>
  );
};

export default Banner;
