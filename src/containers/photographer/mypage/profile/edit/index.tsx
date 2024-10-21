import { Dispatch, SetStateAction } from "react";
import Banner from "./banner";
import BasicInfo from "./basic-info";
import { editStyles } from "./edit.css";
import Links from "./links";
import Leave from "./leave";

const ProfileEdit = () => {
  return (
    <div className={editStyles.container}>
      <div className={editStyles.wrapper}>
        <BasicInfo />
        <Banner />
      </div>
      <Links />
      <Leave />
    </div>
  );
};

export default ProfileEdit;
