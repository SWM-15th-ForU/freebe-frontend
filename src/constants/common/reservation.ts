import { Status } from "reservation-types";

export const statusTitles: Record<Status, string> = {
  NEW: "새 신청",
  IN_PROGRESS: "진행 중",
  WAITING_FOR_DEPOSIT: "입금 대기",
  WAITING_FOR_PHOTO: "촬영 대기",
  PHOTO_COMPLETED: "촬영 완료",
  CANCELLED: "취소",
};

export const statusInfos: Record<Status, string> = {
  NEW: "새로운 예약 신청서가 접수된 상태를 말해요. 신청서를 승낙하려면 예약 확정하기 버튼을 눌러주세요.",
  IN_PROGRESS:
    "고객이 작성한 신청서 내용에서 협의가 필요한 내용이 있다면 진행 중 상태에서 고객과 대화해보세요. 상담이 끝났다면 입금 요청하기 버튼을 눌러주세요.",
  WAITING_FOR_DEPOSIT:
    "프리비가 고객에게 가상계좌를 전송했어요. 입금이 확인되면 작가님께 카카오톡 푸쉬 알림으로 알려드릴게요.",
  WAITING_FOR_PHOTO:
    "고객이 입금을 완료한 상태를 말해요. 예약 확정된 일정을 캘린더에 자동등록 해드릴게요. 즐거운 촬영 되세요!",
  PHOTO_COMPLETED: "이미 완료된 촬영이에요.",
  CANCELLED: "취소된 촬영이에요.",
};
