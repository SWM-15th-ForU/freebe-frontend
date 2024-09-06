import { Details } from "reservation-types";
import { titleStyles } from "../section.css";

const ReservationTitle = ({
  reservationNumber,
  productTitle,
}: Pick<Details, "productTitle" | "reservationNumber">) => {
  return (
    <div className={titleStyles.wrapper}>
      <span className={titleStyles.id}>예약번호 #{reservationNumber}</span>
      <span className={titleStyles.title}>{productTitle}</span>
    </div>
  );
};

export default ReservationTitle;
