import PhotographerSchedule from "@/containers/photographer/mypage/schedule";
import MypageLayout from "@/containers/ui/mypage-layout";
import {
  getCurrentBaseSchedule,
  getCurrentUnit,
} from "@/services/server/photographer/mypage/schedule";

const MySchedulePage = async () => {
  const currentSchedule = await getCurrentBaseSchedule();
  const currentUnit = await getCurrentUnit();

  return (
    <MypageLayout title="예약 일정 오픈">
      <PhotographerSchedule
        currentSchedule={currentSchedule}
        unit={currentUnit}
      />
    </MypageLayout>
  );
};

export default MySchedulePage;
