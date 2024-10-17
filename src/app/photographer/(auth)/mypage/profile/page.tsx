import MyProfile from "@/containers/photographer/mypage/profile";
import MypageLayout from "@/containers/ui/mypage-layout";
import { getCurrentProfile } from "@/services/server/photographer/mypage/profile";

const MyProfilePage = async () => {
  const data = await getCurrentProfile();

  return <MyProfile profile={data} />;
};

export default MyProfilePage;
