import {
  BasicScheduleForm,
  BasicScheduleResponse,
  TimeUnitType,
} from "calender-types";
import { api } from "../../core";

export async function getCurrentBaseSchedule(): Promise<BasicScheduleForm> {
  const { data } = await api
    .get("photographer/schedule/base")
    .json<{ data: BasicScheduleResponse }>();
  return data.reduce((acc, item) => {
    acc[item.dayOfWeek] = {
      ...item,
      isOff: item.operationStatus === "INACTIVE",
    };
    return acc;
  }, {} as BasicScheduleForm);
}

export async function getCurrentUnit(): Promise<TimeUnitType> {
  const { data } = await api
    .get("photographer/schedule/unit")
    .json<{ data: { scheduleUnit: TimeUnitType } }>();
  return data.scheduleUnit;
}
