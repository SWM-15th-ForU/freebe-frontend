import { Dispatch, SetStateAction } from "react";
import Banner from "./banner";
import BasicInfo from "./basic-info";
import { editStyles } from "./edit.css";
import Links from "./links";

const ProfileEdit = ({
  setBannerFile,
  setProfileFile,
}: {
  setBannerFile: Dispatch<SetStateAction<File | undefined>>;
  setProfileFile: Dispatch<SetStateAction<File | undefined>>;
}) => {
  return (
    <div className={editStyles.container}>
      <div className={editStyles.wrapper}>
        <BasicInfo setProfileFile={setProfileFile} />
        <Banner setBannerFile={setBannerFile} />
      </div>
      <Links />
    </div>
  );
};

export default ProfileEdit;
