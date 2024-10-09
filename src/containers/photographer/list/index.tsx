import { useEffect, useState } from "react";
import { ActiveStatus, Infos } from "reservation-types";
import { getReservationList } from "@/services/client/photographer/reservations";
import { responseHandler } from "@/services/common/error";
import StatusList from "./status-list";
import { viewContainer } from "./list.css";

const ReservationList = ({
  selectedProducts,
}: {
  selectedProducts: string[];
}) => {
  const [datas, setDatas] = useState<{ [key in ActiveStatus]: Infos[] }>({
    NEW: [],
    IN_PROGRESS: [],
    WAITING_FOR_DEPOSIT: [],
    WAITING_FOR_PHOTO: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      await responseHandler(getReservationList(), (data) => setDatas(data));
    };
    fetchData();
  }, []);

  function getSelectedReservations(reservations: Infos[]) {
    if (selectedProducts.length === 0) {
      return reservations;
    }
    return reservations.filter((reservation) =>
      selectedProducts.includes(reservation.productTitle),
    );
  }

  return (
    <div className={viewContainer}>
      <StatusList
        status="NEW"
        reservations={getSelectedReservations(datas.NEW)}
      />
      <StatusList
        status="IN_PROGRESS"
        reservations={getSelectedReservations(datas.IN_PROGRESS)}
      />
      <StatusList
        status="WAITING_FOR_DEPOSIT"
        reservations={getSelectedReservations(datas.WAITING_FOR_DEPOSIT)}
      />
      <StatusList
        status="WAITING_FOR_PHOTO"
        reservations={getSelectedReservations(datas.WAITING_FOR_PHOTO)}
      />
    </div>
  );
};

export default ReservationList;
