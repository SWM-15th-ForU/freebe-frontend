import Image from "next/image";
import { profileStyles } from "./images.css";

const ProfileImage = ({ src }: { src?: string }) => {
  return (
    <div className={profileStyles.container}>
      <div
        className={src ? profileStyles.imageWrapper : profileStyles.iconWrapper}
      >
        <Image
          src={src || "/icons/profile.svg"}
          fill
          alt="프로필"
          className={src && profileStyles.image}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
