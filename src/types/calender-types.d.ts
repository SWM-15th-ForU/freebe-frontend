declare module "calender-types" {
  import { DateTime } from "luxon";

  type ScheduleStatusType = "CONFIRMED" | "OPEN" | "CLOSED";
  type TimeUnitType = "THIRTY_MINUTES" | "SIXTY_MINUTES";
  type DaysType =
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";

  interface BaseScheduleType {
    startTime: string;
    endTime: string;
    isOff: boolean;
  }

  type BaseScheduleForm = {
    [key in DaysType]: BaseScheduleType;
  };

  type BaseScheduleResponse = {
    dayOfWeek: DaysType;
    startTime: string;
    endTime: string;
    operationStatus: "ACTIVE" | "INACTIVE";
  }[];

  type DailyScheduleResponse = {
    scheduleId: number;
    scheduleStatus: ScheduleStatusType;
    date: string;
    startTime: string;
    endTime: string;
  }[];

  type DailyScheduleList = DailyScheduleValue[];

  interface DailyScheduleValue {
    scheduleStatus: ScheduleStatusType;
    startTime: DateTime;
    endTime: DateTime;
    date: DateTime;
    scheduleId: number;
  }
}
