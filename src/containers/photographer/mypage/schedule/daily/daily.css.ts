import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { CalendarStylesNames } from "@mantine/dates";
import { ComplexStyleRule, styleVariants } from "@vanilla-extract/css";

export const listStyles = styleVariants({
  status: [texts["headline-03"], sprinkles({ color: "text-point" })],
  info: [texts["body-02"], sprinkles({ color: "text-03" })],
  wrapper: {
    marginTop: 8,
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
  },
});

export const viewStyles = styleVariants({
  container: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      flex: 1,
      minWidth: 420,
      width: "100%",
      padding: 20,
      marginTop: 10,
      borderRadius: 16,
      borderWidth: 1,
      borderStyle: "solid",
    },
  ],
  dateInfo: {
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  date: [
    texts["headline-02"],
    sprinkles({ color: "text-02" }),
    { marginBottom: 8, display: "block" },
  ],
  baseSchedule: [texts["body-02"], sprinkles({ color: "text-03" })],
  scheduleWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: "16px 0px",
  },
});

export const dailyStyles = styleVariants({
  body: {
    display: "flex",
    padding: "16px 0px 24px 0px",
    gap: 20,

    "@media": {
      [breakpoints.mobile]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
  calenderTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  month: [texts["headline-02"], sprinkles({ color: "text-point" })],
  year: [texts["headline-03"], sprinkles({ color: "text-03" })],
  indicatorWrapper: {
    position: "absolute",
    bottom: -15,
    height: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  indicator: { width: 10, height: 10, borderRadius: 10 },
  CLOSED: [sprinkles({ backgroundColor: "pink" })],
  CONFIRMED: [sprinkles({ backgroundColor: "blue" })],
  OPEN: [sprinkles({ backgroundColor: "green" })],
  selected: [sprinkles({ color: "white" })],
  weekend: [sprinkles({ color: "pink" })],
  weekday: [sprinkles({ color: "text-02" })],
});

export const customedCalendarStyles = styleVariants<
  Partial<Record<CalendarStylesNames, ComplexStyleRule>>
>({
  calendarHeaderLevel: {
    flex: 0,
    padding: "6px 24px",
    minHeight: "fit-content",
    minWidth: "fit-content",
  },
  calendarHeader: {
    gap: 20,
    margin: "auto",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarHeaderControl: [
    sprinkles({ backgroundColor: "bg-lightgrey", color: "blue" }),
    { borderRadius: 100, width: 24, height: 24 },
  ],
  calendarHeaderControlIcon: { width: "60%", height: "60%" },
  monthsListControl: [
    texts["headline-03"],
    sprinkles({ color: "text-02" }),
    { margin: 15 },
  ],
  monthCell: [texts["headline-03"], sprinkles({ color: "text-02" })],
  weekdaysRow: [
    sprinkles({ backgroundColor: "bg-lightgrey", color: "text-02" }),
    { verticalAlign: "middle", height: 36 },
  ],
  weekday: { padding: 0 },
  day: {
    position: "relative",
    borderRadius: 100,
    padding: 10,
    margin: 15,
  },
});
