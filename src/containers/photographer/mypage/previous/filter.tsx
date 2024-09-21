import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  InactiveStatus,
  Period,
  ReservationSearchOptions,
  ReservationSearchParams,
} from "reservation-types";
import "dayjs/locale/ko";
import { DatePickerInput, DatesRangeValue } from "@mantine/dates";
import Chip from "@/components/common/chip";
import { datePickerInputStyles } from "@/styles/mantine.css";
import { isUserPeriod } from "@/utils/type-guards";
import { parsePeriodToSearchParams } from "@/utils/date";
import { filterStyles } from "./previous.css";

const Filter = ({
  period,
  status,
  setParams,
  setPeriod,
}: ReservationSearchOptions & {
  setParams: Dispatch<SetStateAction<ReservationSearchParams>>;
  setPeriod: Dispatch<SetStateAction<Period>>;
}) => {
  const periodPickerRef = useRef<HTMLButtonElement>(null);
  const [dateRange, setDateRange] = useState<DatesRangeValue>([null, null]);

  function handleChangeStatus(newStatus: InactiveStatus | undefined) {
    setParams((prev) => {
      return { ...prev, status: newStatus };
    });
  }

  function handleChangePeriod(newPeriod: Period) {
    setPeriod(newPeriod);
    if (!isUserPeriod(newPeriod)) {
      setDateRange([null, null]);
    }
    setParams((prev) => {
      return {
        keyword: prev.keyword,
        page: prev.page,
        status: prev.status,
        ...parsePeriodToSearchParams(newPeriod),
      };
    });
  }

  function handleSetUserPeriod(value: DatesRangeValue) {
    setDateRange(value);
    const [from, to] = value;
    if (from && to) {
      handleChangePeriod({
        from,
        to,
      });
    }
  }

  return (
    <div className={filterStyles.container}>
      <div className={filterStyles.wrapper}>
        <span className={filterStyles.title}>기간</span>
        <Chip
          name="전체"
          styleType="highlight"
          onClick={() => handleChangePeriod(undefined)}
          selected={period === undefined}
        />
        <Chip
          name="이전 3개월"
          styleType="highlight"
          onClick={() => handleChangePeriod("THREE_MONTHS")}
          selected={period === "THREE_MONTHS"}
        />
        <Chip
          name="이전 6개월"
          styleType="highlight"
          onClick={() => handleChangePeriod("SIX_MONTHS")}
          selected={period === "SIX_MONTHS"}
        />
        <Chip
          name="기간 선택"
          styleType="highlight"
          onClick={() => {
            periodPickerRef.current?.click();
          }}
          selected={
            period !== undefined &&
            period !== "THREE_MONTHS" &&
            period !== "SIX_MONTHS"
          }
        />
        <DatePickerInput
          type="range"
          locale="ko"
          classNames={{ ...datePickerInputStyles }}
          value={dateRange}
          onChange={(v) => handleSetUserPeriod(v)}
          style={{ position: "absolute", visibility: "hidden", right: 40 }}
          ref={periodPickerRef}
        />
      </div>
      <div className={filterStyles.wrapper}>
        <span className={filterStyles.title}>상태</span>
        <Chip
          name="전체"
          styleType="highlight"
          selected={status === undefined}
          onClick={() => handleChangeStatus(undefined)}
        />
        <Chip
          name="취소 건"
          styleType="highlight"
          selected={status === "CANCELLED"}
          onClick={() => handleChangeStatus("CANCELLED")}
        />
        <Chip
          name="촬영 완료 건"
          styleType="highlight"
          selected={status === "PHOTO_COMPLETED"}
          onClick={() => handleChangeStatus("PHOTO_COMPLETED")}
        />
      </div>
    </div>
  );
};

export default Filter;
