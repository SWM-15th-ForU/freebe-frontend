import { useEffect, useState } from "react";
import { ActiveStatus, Infos } from "reservation-types";
import { getReservationList } from "@/services/client/photographer/reservations";
import { responseHandler } from "@/services/common/error";
import { getDateStringFromToday } from "@/utils/date";
import StatusList from "./status-list";
import { viewContainer } from "./list.css";

const DUMMY_RESERVATION: { [key in ActiveStatus]: Infos[] } = {
  NEW: [
    {
      customerName: "고객명",
      productTitle: "우정 스냅",
      reservationId: 1,
      reservationStatus: "NEW",
      reservationSubmissionDate: getDateStringFromToday(-1),
      shootingDate: null,
    },
    {
      customerName: "고객명",
      productTitle: "커플 스냅",
      reservationId: 1,
      reservationStatus: "NEW",
      reservationSubmissionDate: getDateStringFromToday(-3),
      shootingDate: null,
    },
  ],
  IN_PROGRESS: [
    {
      customerName: "고객명",
      productTitle: "빈티지 스냅",
      reservationId: 1,
      reservationStatus: "IN_PROGRESS",
      reservationSubmissionDate: getDateStringFromToday(-3),
      shootingDate: null,
    },
    {
      customerName: "고객명",
      productTitle: "졸업 스냅",
      reservationId: 1,
      reservationStatus: "IN_PROGRESS",
      reservationSubmissionDate: getDateStringFromToday(-3),
      shootingDate: null,
    },
    {
      customerName: "고객명",
      productTitle: "프로필 촬영",
      reservationId: 1,
      reservationStatus: "IN_PROGRESS",
      reservationSubmissionDate: getDateStringFromToday(-5),
      shootingDate: null,
    },
  ],
  WAITING_FOR_DEPOSIT: [
    {
      customerName: "고객명",
      productTitle: "컨셉 스냅",
      reservationId: 1,
      reservationStatus: "WAITING_FOR_DEPOSIT",
      reservationSubmissionDate: getDateStringFromToday(-6),
      shootingDate: {
        date: getDateStringFromToday(10),
        startTime: "13:00",
        endTime: "16:00",
      },
    },
  ],
  WAITING_FOR_PHOTO: [
    {
      customerName: "고객명",
      productTitle: "일상 스냅",
      reservationId: 1,
      reservationStatus: "WAITING_FOR_PHOTO",
      reservationSubmissionDate: getDateStringFromToday(-13),
      shootingDate: {
        date: getDateStringFromToday(9),
        startTime: "15:00",
        endTime: "17:00",
      },
    },
    {
      customerName: "고객명",
      productTitle: "야외 스냅",
      reservationId: 1,
      reservationStatus: "WAITING_FOR_PHOTO",
      reservationSubmissionDate: getDateStringFromToday(-8),
      shootingDate: {
        date: getDateStringFromToday(13),
        startTime: "13:00",
        endTime: "16:00",
      },
    },
    {
      customerName: "고객명",
      productTitle: "필름 스냅",
      reservationId: 1,
      reservationStatus: "WAITING_FOR_PHOTO",
      reservationSubmissionDate: getDateStringFromToday(-5),
      shootingDate: {
        date: getDateStringFromToday(14),
        startTime: "11:00",
        endTime: "13:00",
      },
    },
  ],
};

const ReservationList = ({
  selectedProducts,
  setDummyData,
}: {
  selectedProducts: string[];
  setDummyData: boolean;
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
        reservations={
          setDummyData
            ? DUMMY_RESERVATION.NEW
            : getSelectedReservations(datas.NEW)
        }
      />
      <StatusList
        status="IN_PROGRESS"
        reservations={
          setDummyData
            ? DUMMY_RESERVATION.IN_PROGRESS
            : getSelectedReservations(datas.IN_PROGRESS)
        }
      />
      <StatusList
        status="WAITING_FOR_DEPOSIT"
        reservations={
          setDummyData
            ? DUMMY_RESERVATION.WAITING_FOR_DEPOSIT
            : getSelectedReservations(datas.WAITING_FOR_DEPOSIT)
        }
      />
      <StatusList
        status="WAITING_FOR_PHOTO"
        reservations={
          setDummyData
            ? DUMMY_RESERVATION.WAITING_FOR_PHOTO
            : getSelectedReservations(datas.WAITING_FOR_PHOTO)
        }
      />
    </div>
  );
};

export default ReservationList;
