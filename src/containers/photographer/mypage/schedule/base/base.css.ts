import { style, styleVariants } from "@vanilla-extract/css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";

const baseIcon = style({
  transition: "transform 0.5s ease",
  paddingLeft: 3,
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
