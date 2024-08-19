import Image from "next/image";
import { profileContainer } from "./header.css";

const Profile = () => {
  return (
    <div className={profileContainer}>
      <Image src="/icons/alarm.svg" alt="알림" width={20} height={24} />
      <div>
        <Image
          src="/icons/profile.svg"
          alt="내 프로필"
          width={30}
          height={30}
        />
        <Image
          src="/icons/down-skyblue.svg"
          alt="내 프로필"
          width={10}
          height={5}
        />
      </div>
    </div>
  );
};

export default Profile;
