import {
  BaseScheduleForm,
  BaseScheduleResponse,
  DailyScheduleResponse,
  DailyScheduleList,
  DaysType,
  TimeUnitType,
  DailyScheduleValue,
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

  const dailySchedules: Map<number, DailyScheduleList> = new Map();

  data.forEach(({ scheduleId, scheduleStatus, date, startTime, endTime }) => {
    const { day } = DateTime.fromISO(date);

    const prevList = dailySchedules.get(day);
    const newSchedule = {
      scheduleId,
      scheduleStatus,
      date: DateTime.fromFormat(date, "yyyy-MM-dd"),
      startTime: DateTime.fromFormat(startTime, "HH:mm:ss"),
      endTime: DateTime.fromFormat(endTime, "HH:mm:ss"),
    };
    console.log(newSchedule);
    if (prevList) {
      dailySchedules.set(day, [...prevList, newSchedule]);
    } else {
      dailySchedules.set(day, [newSchedule]);
    }
  });

  return dailySchedules;
}

export async function postDailySchedule(newSchedule: DailyScheduleValue) {
  const data = {
    scheduleStatus: newSchedule.scheduleStatus,
    date: newSchedule.date.toFormat("yyyy-MM-dd"),
    startTime: newSchedule.startTime.toFormat("HH:mm:ss"),
    endTime: newSchedule.endTime.toFormat("HH:mm:ss"),
  };
  await apiClient.post("photographer/schedule/daily", {
    json: { data },
  });
}

export async function putDailySchedule(newSchedule: DailyScheduleValue) {
  const data = {
    scheduleStatus: newSchedule.scheduleStatus,
    date: newSchedule.date.toFormat("yyyy-MM-dd"),
    startTime: newSchedule.startTime.toFormat("HH:mm:ss"),
    endTime: newSchedule.endTime.toFormat("HH:mm:ss"),
  };
  await apiClient.put(`photographer/schedule/daily/${newSchedule.scheduleId}`, {
    json: { data },
  });
}

export async function deleteDailySchedule(scheduleId: number) {
  await apiClient.delete(`photographer/schedule/daily/${scheduleId}`);
}
