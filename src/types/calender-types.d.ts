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

  interface BasicScheduleType {
    startTime: string;
    endTime: string;
    isOff: boolean;
  }

  type BasicScheduleForm = {
    [key in DaysType]: BasicScheduleType;
  };

  type BasicScheduleResponse = {
    dayOfWeek: DaysType;
    startTime: string;
    endTime: string;
    operationStatus: "ACTIVE" | "INACTIVE";
  }[];
}
