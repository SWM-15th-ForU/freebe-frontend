import PhotographerNotice from "@/containers/photographer/mypage/notice";
import MypageLayout from "@/containers/ui/mypage-layout";
import { getCurrentNotices } from "@/services/server/photographer/mypage/notice";

const NoticePage = async () => {
  const data = await getCurrentNotices();
  return (
    <MypageLayout title="공지사항 관리">
      <PhotographerNotice data={data} />
    </MypageLayout>
  );
};

export default NoticePage;
