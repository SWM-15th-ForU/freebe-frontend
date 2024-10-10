import PhotographerNotice from "@/containers/photographer/mypage/notice";
import MypageLayout from "@/containers/ui/mypage-layout";
import { Notice } from "profile-types";

const NoticePage = () => {
  const data: Notice[] = [];
  return (
    <MypageLayout title="공지사항 관리">
      <PhotographerNotice data={data} />
    </MypageLayout>
  );
};

export default NoticePage;
