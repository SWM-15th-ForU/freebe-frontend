import Image from "next/image";
import { profileStyles } from "./common.css";

const Profile = ({ img, id }: { img?: string; id: string }) => {
  return (
    <div className={profileStyles.container}>
      <div className={profileStyles.imageWrapper}>
        <Image
          src="/icons/profile.svg"
          height={25}
          width={25}
          alt="프로필 이미지"
        />
        {img && (
          <Image
            src={img}
            fill
            alt="프로필 이미지"
            className={profileStyles.image}
          />
        )}
      </div>
      <span className={profileStyles.id}>@{id}</span>
    </div>
  );
};

export default Profile;
