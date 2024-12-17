declare module "calender-types" {
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
}
