import {
  BaseScheduleForm,
  BaseScheduleResponse,
  DailyScheduleResponse,
  DailyScheduleValue,
  DaysType,
  TimeUnitType,
} from "calender-types";
import { DateTime } from "luxon";
import apiClient from "../../core";

export async function putNewUnit(data: TimeUnitType) {
  await apiClient.put("photographer/schedule/unit", {
    json: { scheduleUnit: data },
  });
}

export async function putNewBaseSchedule(form: BaseScheduleForm) {
  const data: BaseScheduleResponse = Object.entries(form).map(
    ([title, value]) => {
      const dayOfWeek = title as DaysType;
      return {
        dayOfWeek,
        startTime: value.startTime,
        endTime: value.endTime,
        operationStatus: value.isOff ? "INACTIVE" : "ACTIVE",
      };
    },
  );

  await apiClient.put("photographer/schedule/base", {
    json: { data },
  });
}

export async function getDailySchedules(requestedDate: Date) {
  const { data } = await apiClient
    .get("photographer/schedule/daily", {
      json: {
        year: requestedDate.getFullYear(),
        monthValue: requestedDate.getMonth() + 1,
      },
    })
    .json<{ data: DailyScheduleResponse }>();

  const dailySchedules: Map<number, DailyScheduleValue> = new Map();

  data.forEach(({ scheduleId, scheduleStatus, date, startTime, endTime }) => {
    const { day } = DateTime.fromISO(date);

    const prevList = dailySchedules.get(day);
    const newSchedule = {
      scheduleId,
      scheduleStatus,
      startTime: DateTime.fromFormat(startTime, "HH:MM:ss"),
      endTime: DateTime.fromFormat(endTime, "HH:MM:ss"),
    };
    if (prevList) {
      dailySchedules.set(day, [...prevList, newSchedule]);
    } else {
      dailySchedules.set(day, [newSchedule]);
    }
  });

  return dailySchedules;
}
