import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { PhotographerForm } from "profile-types";
import BackgroundImage from "@/containers/customer/main/background-image";
import { CustomButton } from "@/components/buttons/common-buttons";
import { ACCEPTED_IMAGE } from "@/constants/common/common";
import { editStyles } from "./edit.css";

const Banner = () => {
  const { setValue, watch } = useFormContext<PhotographerForm>();

  const bannerImg = watch("bannerImg");

  function handleDeleteBanner() {
    setValue("bannerImg", undefined);
  }

  function handleChangeBanner(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.files) {
      const newFile = e.currentTarget.files[0];
      const blob = URL.createObjectURL(newFile);
      setValue("bannerImg", { url: blob, file: newFile });
    }
    e.currentTarget.value = "";
  }

  return (
    <div className={editStyles.box}>
      <span className={editStyles.title}>배너 이미지</span>
      {bannerImg && (
        <div className={editStyles.banner}>
          <BackgroundImage mainImage={bannerImg?.url} />
        </div>
      )}
      <div className={editStyles.buttonsWrapper}>
        <CustomButton
          title="삭제"
          styleType="line"
          size="xs"
          onClick={handleDeleteBanner}
          style={{ paddingLeft: 15, paddingRight: 15 }}
        />
        <CustomButton
          title="등록"
          styleType="primary"
          size="xs"
          style={{ paddingLeft: 15, paddingRight: 15 }}
        >
          <input
            type="file"
            accept={ACCEPTED_IMAGE.file}
            style={{
              opacity: 0,
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              cursor: "pointer",
            }}
            onChange={handleChangeBanner}
          />
        </CustomButton>
      </div>
    </div>
  );
};

export default Banner;
