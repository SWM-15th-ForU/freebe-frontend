import { style, styleVariants } from "@vanilla-extract/css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";

const baseIcon = style({
  transition: "transform 0.5s ease",
  paddingLeft: 3,
});

export const confirmModalStyles = styleVariants({
  caption: [texts["body-02"], sprinkles({ color: "text-02" })],
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: "16px 0px 40px 0px",
  },
  schedule: {
    display: "flex",
    gap: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inner: {
    left: 0,
    right: 0,
  },
  key: [texts["headline-03"], sprinkles({ color: "blue" })],
  value: [texts["body-02"], sprinkles({ color: "text-01" })],
});

export const baseScheduleStyles = styleVariants({
  control: [
    {
      border: "none",
      background: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  ],
  openIcon: [baseIcon, { transform: "rotate(90deg)" }],
  closeIcon: [baseIcon, { transform: "rotate(270deg)" }],
});

export const dayScheduleStyles = styleVariants({
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    rowGap: 12,
    justifyContent: "space-between",
  },
  timeWrapper: [
    sprinkles({ color: "text-02" }),
    texts["headline-03"],
    {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 8,
    },
  ],
  value: [
    sprinkles({ color: "text-02" }),
    texts["headline-03"],
    { padding: "0px 16px" },
  ],
});
