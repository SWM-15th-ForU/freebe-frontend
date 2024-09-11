"use client";

import { usePathname } from "next/navigation";
import { CustomerDetails, StatusHistory } from "reservation-types";
import ReservationStatus from "@/containers/common/status";
import { compareStatus } from "@/utils/reservation";
import Chip from "@/components/common/chip";
import popToast from "@/components/common/toast";
import { statusStyles } from "./detail.css";

const Status = ({
  productTitle,
  currentStatus,
}: Pick<CustomerDetails, "productTitle" | "currentStatus">) => {
  const url = usePathname();

  const statusHistory: StatusHistory = {
    NEW: {
      current: compareStatus(currentStatus, "NEW"),
    },
    IN_PROGRESS: {
      current: compareStatus(currentStatus, "IN_PROGRESS"),
    },
    WAITING_FOR_DEPOSIT: {
      current: compareStatus(currentStatus, "WAITING_FOR_DEPOSIT"),
    },
    WAITING_FOR_PHOTO: {
      current: compareStatus(currentStatus, "WAITING_FOR_PHOTO"),
    },
  };

  async function handleExport() {
    try {
      await navigator.clipboard.writeText(`https://www.freebe.co.kr${url}`);
      popToast(
        "클립보드에 복사되었습니다.",
        "링크를 통해 예약 현황을 확인할 수 있어요!",
      );
    } catch (error) {
      popToast("오류가 발생했습니다.", "다시 시도해 주세요.");
    }
  }

  return (
    <div className={statusStyles.container}>
      <span className={statusStyles.title}>{productTitle}</span>
      <span className={statusStyles.message}>
        신청서 제출이 완료되었습니다.
      </span>
      <ReservationStatus statusHistory={statusHistory} noInformation />
      <Chip
        name="공유하기"
        container={{ marginTop: 24 }}
        styleType="highlight"
        onClick={handleExport}
      />
    </div>
  );
};

export default Status;
