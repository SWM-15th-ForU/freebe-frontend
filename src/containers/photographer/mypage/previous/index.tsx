"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  InactiveStatus,
  Period,
  ReservationSearchParams,
} from "reservation-types";
import Search from "@/components/common/search";
import { CustomButton } from "@/components/buttons/common-buttons";
import QueryProviders from "@/containers/common/query-providers";
import Filter from "./filter";
import View from "./view";
import { layoutStyles } from "./previous.css";

const PreviousReservations = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState<Period>();
  const [status, setStatus] = useState<undefined | InactiveStatus>();
  const [activePage, setActivePage] = useState(1);
  const [params, setParams] = useState<ReservationSearchParams>({});

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
          <CustomButton size="sm" styleType="primary" title="검색하기" />
        </div>
      </div>
      <div className={layoutStyles.body}>
        <Filter
          setPeriod={setPeriod}
          setStatus={setStatus}
          status={status}
          period={period}
        />
        <div className={layoutStyles.content}>
          <QueryProviders>
            <View />
          </QueryProviders>
        </div>
      </div>
    </div>
  );
};

export default PreviousReservations;
