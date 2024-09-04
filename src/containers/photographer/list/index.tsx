import { useEffect, useState } from "react";
import { Infos, Status } from "reservation-types";
import { getReservationList } from "@/services/client/photographer/reservations";
import StatusList from "./status-list";
import { viewContainer } from "./list.css";

const ReservationList = async () => {
  const [datas, setDatas] = useState<{ [key in Status]: Infos[] }>({
    NEW: [],
    IN_PROGRESS: [],
    WAITING_FOR_DEPOSIT: [],
    WAITING_FOR_PHOTO: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await getReservationList();
      setDatas(data);
    };

    fetchData();
  }, []);
  return (
    <div className={viewContainer}>
      <StatusList status="NEW" reservations={datas.NEW} />
      <StatusList status="IN_PROGRESS" reservations={datas.IN_PROGRESS} />
      <StatusList
        status="WAITING_FOR_DEPOSIT"
        reservations={datas.WAITING_FOR_DEPOSIT}
      />
      <StatusList
        status="WAITING_FOR_PHOTO"
        reservations={datas.WAITING_FOR_PHOTO}
      />
    </div>
  );
};

export default ReservationList;
