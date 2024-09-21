import Image from "next/image";
import Link from "next/link";
import { ReservationList } from "reservation-types";
import { formatDate } from "@/utils/date";
import { statusTitles } from "@/constants/common/reservation";
import { commonItemStyles, listItemStyles } from "./item.css";

const ListItem = ({
  customerName,
  image,
  price,
  productTitle,
  reservationId,
  reservationStatus,
  reservationSubmissionDate,
  shootingDate,
}: ReservationList) => {
  return (
    <Link href={`/photographer/reservation/${reservationId}`}>
      <div
        className={
          reservationStatus === "PHOTO_COMPLETED"
            ? listItemStyles.container
            : listItemStyles.cancel
        }
      >
        <div className={listItemStyles.wrapper}>
          {reservationStatus === "PHOTO_COMPLETED" && (
            <div className={listItemStyles.borderedDate}>
              <span className={commonItemStyles.name}>촬영 완료 일시</span>
              <span className={commonItemStyles.content}>
                {formatDate(shootingDate)}
              </span>
            </div>
          )}
          <div className={listItemStyles.date}>
            <span className={commonItemStyles.name}>신청 일시</span>
            <span className={commonItemStyles.content}>
              {formatDate(reservationSubmissionDate)}
            </span>
          </div>
          <div className={listItemStyles.information}>
            <Image
              src="/icons/reservation/person.svg"
              width={12}
              height={12}
              alt="고객명"
            />
            <span className={commonItemStyles.content}>{customerName}</span>
          </div>
        </div>
        <div className={listItemStyles.divider} />
        <div className={listItemStyles.wrapper}>
          <Image
            src={image}
            alt="예약 사진"
            height={60}
            width={80}
            className={listItemStyles.thumbnail}
          />
          <div className={commonItemStyles.titleBox}>
            <span className={commonItemStyles.subtitle}>{productTitle}</span>
            <span className={commonItemStyles.title}>{price}</span>
          </div>
          <div
            className={
              reservationStatus === "PHOTO_COMPLETED"
                ? commonItemStyles.status
                : commonItemStyles.cancel
            }
          >
            <span>{statusTitles[reservationStatus]}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
