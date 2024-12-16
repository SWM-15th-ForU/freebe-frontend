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
    id: number;
    name: string;
  }

  type BasicScheduleForm = {
    [key in DaysType]: {
      startTime: string;
      endTime: string;
      isOff: boolean;
    };
  };
}
