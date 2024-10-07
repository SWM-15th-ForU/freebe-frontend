import { Dispatch, SetStateAction } from "react";
import Banner from "./banner";
import BasicInfo from "./basic-info";
import { editStyles } from "./edit.css";
import Links from "./links";

const ProfileEdit = () => {
  return (
    <div className={editStyles.container}>
      <div className={editStyles.wrapper}>
        <BasicInfo />
        <Banner />
      </div>
      <Links />
    </div>
  );
};

export default ProfileEdit;
