import { styleVariants } from "@vanilla-extract/css";

export const ScheduleCalenderStyles = styleVariants({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
