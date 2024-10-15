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
      position: "relative",
      padding: "40px 0px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
    },
  ],
  blurMessage: [
    texts["headline-03"],
    sprinkles({ color: "text-point" }),
    {
      position: "absolute",
      top: 0,
      height: "100%",
      width: "100%",
      display: "flex",
      paddingTop: 60,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
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
  blur: [
    baseWrapper,
    {
      flexWrap: "wrap",
      justifyContent: "space-between",
      columnGap: "20px",
      filter: "blur(8px)",
      backgroundColor: "white",
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
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
    },
  ],
  scheduleWrapper: [
    baseWrapper,
    {
      gap: 20,
      overflowX: "scroll",
      "@media": {
        [breakpoints.mobile]: {
          display: "flex",
          flexDirection: "column",
          gap: 0,
        },
      },
    },
  ],
  imageWrapper: [
    baseWrapper,
    {
      gap: 20,
      overflowX: "scroll",
    },
  ],
  optionWrapper: [
    baseWrapper,
    { gap: 10, flexDirection: "column", padding: "10px 0px" },
  ],
  title: [
    texts["headline-02"],
    sprinkles({ color: "text-02" }),
    { minWidth: "fit-content" },
  ],
  price: [texts["headline-02"], sprinkles({ color: "blue" })],
  message: [texts["headline-03"], sprinkles({ color: "text-point" })],
  priceWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "28px 0px",
    gap: 20,
  },
  buttonWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  headlineWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 12,
    height: 32,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  detail: [
    texts["body-02"],
    sprinkles({ color: "text-03" }),
    { background: "none", border: "none" },
  ],
});

export const fieldStyles = styleVariants({
  text: {
    minWidth: "fit-content",
    width: "45%",
    flexGrow: 1,
  },
  schedule: {
    minWidth: "max-content",
    flexShrink: 0,
    flexGrow: 1,
  },
  option: {
    width: "100%",
    gap: 12,
    display: "flex",
    position: "relative",
  },
});

export const titleStyles = styleVariants({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
  },
  title: [texts["headline-01"], sprinkles({ color: "text-point" })],
  id: [texts["body-01"], sprinkles({ color: "text-04" })],
});
