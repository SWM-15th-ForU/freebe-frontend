import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseWrapper = style({
  position: "relative",
  width: "100%",
  display: "flex",
});

export const sectionStyles = styleVariants({
  container: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      padding: "40px 0px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
    },
  ],
  wrapper: [
    baseWrapper,
    {
      flexWrap: "wrap",
      justifyContent: "space-between",
      columnGap: "20px",
    },
  ],
  box: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      marginTop: 20,
      borderWidth: 1,
      borderStyle: "solid",
      padding: 40,
      borderRadius: 16,
      "@media": {
        [breakpoints.mobile]: {
          padding: 24,
        },
      },
    },
  ],
  divider: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
    },
  ],
  scheduleWrapper: [baseWrapper, { gap: 20, overflowX: "scroll" }],
  optionWrapper: [
    baseWrapper,
    { gap: 10, flexDirection: "column", padding: "10px 0px" },
  ],
  title: [texts["headline-02"], sprinkles({ color: "text-02" })],
  price: [texts["headline-02"], sprinkles({ color: "blue" })],
  message: [texts["headline-03"], sprinkles({ color: "text-point" })],
  priceWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "28px 0px",
  },
  buttonWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});

export const fieldStyles = styleVariants({
  text: {
    minWidth: "45%",
    flex: 1,
  },
  schedule: {
    minWidth: "fit-content",
    flex: 1,
  },
  option: {
    width: "100%",
    gap: 12,
    display: "flex",
  },
});

export const titleStyles = styleVariants({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  title: [texts["headline-01"], sprinkles({ color: "text-point" })],
  id: [texts["body-01"], sprinkles({ color: "text-04" })],
});
