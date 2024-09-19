"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { InactiveStatus, ReservationList } from "reservation-types";
import Search from "@/components/common/search";
import { CustomButton } from "@/components/buttons/common-buttons";
import { getPreviousReservationList } from "@/services/client/photographer/reservations";
import { formatDateString } from "@/utils/date";
import { layoutStyles } from "./previous.css";

const PreviousReservations = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState<{ from?: Date; to?: Date }>({});
  const [status, setStatus] = useState<undefined | InactiveStatus>();
  const [reservationList, setReservationList] = useState<ReservationList[]>([]);

  async function getList() {
    const from = period.from && formatDateString(period.from);
    const to = period.to && formatDateString(period.to);
    const page = searchParams.get("page");
    const newList = await getPreviousReservationList({
      from,
      to,
      status,
      keyword: search,
      page: page !== undefined ? Number(page) : undefined,
    });
    setReservationList(newList);
  }

  async function handleSearch() {
    await getList();
  }

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.header}>
        <span className={layoutStyles.title}>이전 예약</span>
        <div className={layoutStyles.search}>
          <Search
            value={search}
            setValue={setSearch}
            container={{ height: "100%", flex: 1 }}
          />
          <CustomButton
            size="sm"
            styleType="primary"
            title="검색하기"
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviousReservations;
