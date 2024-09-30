import Image from "next/image";
import Link from "next/link";
import { ReservationList } from "reservation-types";
import { formatDate, formatDateString } from "@/utils/date";
import { statusTitles } from "@/constants/common/reservation";
import { commonItemStyles, galleryItemStyles } from "./item.css";

const GalleryItem = ({
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
    <Link
      href={`/photographer/reservation/${reservationId}`}
      className={galleryItemStyles.container}
    >
      <div className={galleryItemStyles.image}>
        <Image
          src={image}
          fill
          alt="예약 사진"
          className={galleryItemStyles.image}
        />
      </div>
      <div className={galleryItemStyles.body}>
        <div className={galleryItemStyles.wrapper}>
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
            {statusTitles[reservationStatus]}
          </div>
        </div>
        <div className={galleryItemStyles.information}>
          <Image
            src="/icons/reservation/person.svg"
            width={12}
            height={12}
            alt="고객명"
          />
          <span className={commonItemStyles.content}>{customerName}</span>
        </div>
        <div className={galleryItemStyles.wrapper}>
          {shootingDate && (
            <div className={galleryItemStyles.date}>
              <span className={commonItemStyles.name}>촬영 완료 일시</span>
              <span className={commonItemStyles.content}>
                {formatDate(shootingDate)}
              </span>
            </div>
          )}
          <div className={galleryItemStyles.date}>
            <span className={commonItemStyles.name}>신청 일시</span>
            <span className={commonItemStyles.content}>
              {formatDate(reservationSubmissionDate)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GalleryItem;
