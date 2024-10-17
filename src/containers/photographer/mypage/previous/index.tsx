"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Period, ReservationSearchParams } from "reservation-types";
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
  const [params, setParams] = useState<ReservationSearchParams>({});

  useEffect(() => {
    const page = searchParams.get("page");
    setParams((prev) => ({ ...prev, page: Number(page) || 1 }));
  }, [searchParams]);

  function handleSetKeyword() {
    setParams((prev) => {
      return { ...prev, keyword: search };
    });
  }

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.header}>
        <span className={layoutStyles.title}>이전 예약</span>
        <div className={layoutStyles.search}>
          <Search
            value={search}
            setValue={setSearch}
            onEnter={handleSetKeyword}
            container={{ height: "100%", flex: 1 }}
          />
          <CustomButton
            size="sm"
            styleType="primary"
            title="검색하기"
            onClick={handleSetKeyword}
          />
        </div>
      </div>
      <div className={layoutStyles.body}>
        <Filter
          setParams={setParams}
          setPeriod={setPeriod}
          status={params.status}
          period={period}
        />
        <div className={layoutStyles.content}>
          <QueryProviders>
            <View {...params} />
          </QueryProviders>
        </div>
      </div>
    </div>
  );
};

export default PreviousReservations;
