import {
  BasicScheduleForm,
  BasicScheduleResponse,
  DaysType,
  TimeUnitType,
} from "calender-types";
import apiClient from "../../core";

export async function putNewUnit(data: TimeUnitType) {
  await apiClient.put("photographer/schedule/unit", {
    json: { scheduleUnit: data },
  });
}

export async function putNewBaseSchedule(form: BasicScheduleForm) {
  const data: BasicScheduleResponse = Object.entries(form).map(
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
