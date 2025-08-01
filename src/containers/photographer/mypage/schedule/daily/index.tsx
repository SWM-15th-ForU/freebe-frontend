"use client";

import "dayjs/locale/ko";
import { useState } from "react";
import { DateTime } from "luxon";
import {
  BaseScheduleForm,
  DailyScheduleList,
  TimeUnitType,
} from "calender-types";
import { DatePicker, DateValue } from "@mantine/dates";
import { useSuspenseQuery } from "@tanstack/react-query";
import { daysArray } from "@/constants/schedule";
import { getDailySchedules } from "@/services/client/photographer/mypage/schedule";
import { scheduleStyles } from "../schedule.css";
import ScheduleView from "./schedule-view";
import { customedCalendarStyles, dailyStyles } from "./daily.css";

const CalendarLabel = (current: Date, level: "year" | "month") => {
  return (
    <div className={dailyStyles.calenderTitle}>
      {level === "month" && (
        <span className={dailyStyles.year}>{current.getFullYear()}</span>
      )}
      <span className={dailyStyles.month}>
        {level === "month"
          ? `${current.getMonth() + 1}월`
          : current.getFullYear()}
      </span>
    </div>
  );
};

const CalendarDay = (
  date: Date,
  schedules: ("OPEN" | "CLOSED" | "CONFIRMED")[],
  selected: boolean,
) => {
  return (
    <>
      <span
        className={
          selected
            ? dailyStyles.selected
            : date.getDay() === 0
              ? dailyStyles.weekend
              : dailyStyles.weekday
        }
      >
        {date.getDate()}
      </span>
      <div className={dailyStyles.indicatorWrapper}>
        {schedules.slice(0, 3).map((status, index) => (
          <div
            key={index + status}
            className={`${dailyStyles.indicator} ${dailyStyles[status]}`}
          />
        ))}
      </div>
    </>
  );
};

const DailySchedule = ({
  baseSchedule,
  unit,
}: {
  baseSchedule: BaseScheduleForm;
  unit: TimeUnitType;
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { data: dailySchedules, error } = useSuspenseQuery({
    queryKey: [
      "dailySchedule",
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
    ],
    initialData: new Map<number, DailyScheduleList>(),
    staleTime: 0,
    queryFn: () => getDailySchedules(selectedDate),
    retry: false,
  });

  if (error) {
    throw error;
  }

  function changeDate(date: DateValue) {
    if (date) {
      setSelectedDate(date);
    }
  }

  function changeMonth(date: DateValue) {
    if (date) {
      date.setDate(1);
      setSelectedDate(date);
    }
  }

  return (
    <div>
      <span className={scheduleStyles.title}>날짜별 스케줄</span>
      <div className={dailyStyles.body}>
        <DatePicker
          maxLevel="year"
          locale="ko"
          size="md"
          value={selectedDate}
          onChange={changeDate}
          onPreviousMonth={changeMonth}
          onNextMonth={changeMonth}
          onMonthSelect={changeMonth}
          hideOutsideDates
          classNames={{ ...customedCalendarStyles }}
          monthLabelFormat={(month) => CalendarLabel(month, "month")}
          yearLabelFormat={(year) => CalendarLabel(year, "year")}
          renderDay={(date) =>
            CalendarDay(
              date,
              dailySchedules
                .get(date.getDate())
                ?.map(({ scheduleStatus }) => scheduleStatus) || [],
              DateTime.fromJSDate(date).hasSame(
                DateTime.fromJSDate(selectedDate),
                "day",
              ),
            )
          }
          firstDayOfWeek={0}
          weekendDays={[0]}
        />
        <ScheduleView
          baseSchedule={
            baseSchedule[daysArray[(selectedDate.getDay() + 6) % 7]]
          }
          dailySchedules={dailySchedules.get(selectedDate.getDate()) || []}
          date={selectedDate}
          unit={unit}
        />
      </div>
    </div>
  );
};

export default DailySchedule;
