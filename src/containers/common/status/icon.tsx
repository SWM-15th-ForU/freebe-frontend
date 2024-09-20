import Image from "next/image";
import { Status } from "reservation-types";
import AdditionInfo from "@/components/common/addition-info";
import { statusInfos, statusTitles } from "@/constants/common/reservation";
import { bannerStyles, iconStyles } from "./status.css";

const Banner = ({
  status,
  current,
  canceled,
}: Omit<Parameters<typeof StatusIcon>[0], "date" | "hasInformation">) => {
  const statusIndex: Record<Status, string> = {
    NEW: "1",
    IN_PROGRESS: "2",
    WAITING_FOR_DEPOSIT: "3",
    WAITING_FOR_PHOTO: "4",
    CANCELLED: "-",
    PHOTO_COMPLETED: "5",
  };

  return (
    <div className={bannerStyles[current]}>
      <div className={bannerStyles.wrapper}>
        {current === "DONE" && (
          <div className={bannerStyles.image}>
            {canceled ? (
              <Image src="/icons/close-shadow.svg" alt="canceled" fill />
            ) : (
              <Image src="/icons/components/check.svg" alt="check" fill />
            )}
          </div>
        )}
        {current === "NOW" && (
          <div className={bannerStyles.image}>
            <Image src="/icons/options.svg" alt="check" fill />
          </div>
        )}
        {current === "NOT_STARTED" && statusIndex[status]}
      </div>
    </div>
  );
};

const StatusIcon = ({
  status,
  current,
  date,
  canceled,
  hasInformation,
}: {
  status: Status;
  hasInformation: boolean;
  current: "DONE" | "NOW" | "NOT_STARTED";
  date?: string;
  canceled?: boolean;
}) => {
  return (
    <div className={iconStyles.container}>
      <div className={iconStyles.wrapper}>
        <span className={iconStyles.caption}>{canceled ? "취소" : date}</span>
      </div>
      <Banner status={status} current={current} canceled={canceled} />
      <div className={iconStyles.wrapper}>
        <span
          className={
            current === "NOT_STARTED" ? iconStyles.caption : iconStyles.name
          }
        >
          {statusTitles[status]}
        </span>
        {hasInformation && (
          <AdditionInfo content={statusInfos[status]} size={14} />
        )}
      </div>
    </div>
  );
};

export default StatusIcon;
