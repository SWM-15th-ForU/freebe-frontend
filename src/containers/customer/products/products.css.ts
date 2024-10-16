import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const listContainer = style({
  display: "flex",
  flexWrap: "wrap",
  columnCount: 2,
  gap: 4,
});

export const headerStyles = styleVariants({
  container: [
    sprinkles({
      backgroundColor: "white",
    }),
    {
      zIndex: 5,
      position: "sticky",
      top: 0,
      width: "100%",
    },
  ],
  wrapper: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 60,
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
    },
  ],
  button: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    left: 12,
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-01",
    }),
  ],
  progressContainer: [
    sprinkles({
      backgroundColor: "bg-lightgrey",
    }),
    {
      height: 4,
      width: "100%",
    },
  ],
  progressBar: [
    sprinkles({
      backgroundColor: "blue",
    }),
    { height: "100%" },
  ],
});

export const infoStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      flex: 1,
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
  ],
  slide: {
    position: "relative",
    width: "100%",
    height: 450,
    backgroundColor: "#d9d9d9",
    "@media": {
      [breakpoints.mobile]: { width: "100vw" },
    },
  },
  wrapper: [
    sprinkles({ backgroundColor: "white" }),
    {
      padding: "28px 20px",
      marginBottom: 8,
    },
  ],
  headWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  title: [
    texts["headline-01"],
    sprinkles({
      color: "text-point",
    }),
  ],
  price: [
    texts["headline-02"],
    sprinkles({
      color: "blue",
    }),
    { marginLeft: "auto" },
  ],
  subtitle: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
    { margin: "0px 20px 20px 0px" },
  ],
  content: [
    texts["body-02"],
    sprinkles({
      color: "text-02",
    }),
    { margin: "8px 0px 0px 0px" },
  ],
});

export const modalStyles = styleVariants({
  content: {
    borderRadius: 16,
    padding: "0px 16px 16px 16px",
  },
  header: {
    padding: 30,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 16px",
    justifyContent: "space-between",
    gap: 10,
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-point",
    }),
  ],
  info: [
    texts["body-02"],
    sprinkles({
      color: "text-02",
    }),
  ],
  close: {
    position: "absolute",
    top: 25,
    right: 10,
  },
});

export const indicatorStyle = style({
  width: "8px",
  height: "8px",
  backgroundColor: "white",
  borderRadius: "50%",
  transition: "background-color 0.3s ease",

  selectors: {
    "&[data-active]": { transition: "none", backgroundColor: "#007AFF" },
  },
});
