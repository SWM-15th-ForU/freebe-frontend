import { TimeUnitType } from "calender-types";
import apiClient from "../../core";

export async function putNewUnit(data: TimeUnitType) {
  await apiClient.put("photographer/schedule/unit", {
    json: { scheduleUnit: data },
  });
}
