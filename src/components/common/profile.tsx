import { profileStyles } from "./common.css";
import ProfileImage from "../images/profile-image";

const Profile = ({ img, id }: { img?: string; id: string }) => {
  return (
    <div className={profileStyles.container}>
      <div className={profileStyles.imageWrapper}>
        <ProfileImage src={img} />
      </div>
      <span className={profileStyles.id}>@{id}</span>
    </div>
  );
};

export default Profile;
