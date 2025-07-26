import {
  BaseScheduleForm,
  BaseScheduleResponse,
  TimeUnitType,
} from "calender-types";
import { api } from "../../core";

export async function getCurrentBaseSchedule(): Promise<BaseScheduleForm> {
  const { data } = await api
    .get("photographer/schedule/base")
    .json<{ data: BaseScheduleResponse }>();
  return data.reduce((acc, item) => {
    acc[item.dayOfWeek] = {
      endTime: item.endTime,
      startTime: item.startTime,
      isOff: item.operationStatus === "INACTIVE",
    };
    return acc;
  }, {} as BaseScheduleForm);
}

export async function getCurrentUnit(): Promise<TimeUnitType> {
  const { data } = await api
    .get("photographer/schedule/unit")
    .json<{ data: { scheduleUnit: TimeUnitType } }>();
  return data.scheduleUnit;
}
