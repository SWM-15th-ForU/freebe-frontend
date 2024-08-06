import Link from "next/link";
import { Body15SB } from "@/components/texts/texts";
import { profileContainer } from "./header.css";

const Profile = ({ name }: { name: string }) => {
  return (
    <div className={profileContainer}>
      <Link href="photographer/mypage/products">마이페이지</Link>
      <Body15SB>{name} 작가님</Body15SB>
    </div>
  );
};

export default Profile;
