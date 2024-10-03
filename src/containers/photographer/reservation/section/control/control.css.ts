import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  minWidth: 450,
  flex: 0.5,

  position: "relative",
  "@media": {
    [breakpoints.mobile]: {
      minWidth: "100%",
    },
  },
});

export const dateStyles = styleVariants({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    columnGap: 10,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  schedule: [sprinkles({ color: "blue" }), texts["headline-02"]],
  info: [sprinkles({ color: "text-03" }), texts["headline-03"]],
  error: [
    texts["caption-01"],
    sprinkles({
      color: "pink",
    }),
  ],
});

export const customModalStyles = styleVariants({
  content: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  dateContent: {
    flexShrink: 0,
    flexGrow: 1,
    maxWidth: "fit-content",
    borderRadius: 16,
  },
  dateSelect: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  preferredDate: {
    width: "100%",
    padding: "20px 0px 20px 0px",
  },
});
