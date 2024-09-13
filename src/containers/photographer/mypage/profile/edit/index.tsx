import Banner from "./banner";
import BasicInfo from "./basic-info";
import { editStyles } from "./edit.css";

const ProfileEdit = () => {
  return (
    <div className={editStyles.container}>
      <div className={editStyles.wrapper}>
        <BasicInfo />
        <Banner />
      </div>
    </div>
  );
};

export default ProfileEdit;
