import sprinkles from "@/styles/sprinkles.css";
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
      position: "fixed",
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
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
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
    { paddingBottom: 72 },
  ],
  wrapper: [
    sprinkles({ backgroundColor: "white" }),
    {
      padding: "28px 20px",
      marginBottom: 8,
    },
  ],
  itemsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  title: [
    sprinkles({
      fontSize: "headline-01",
      fontWeight: "headline-01",
      color: "text-point",
    }),
  ],
  subtitle: [
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
      color: "text-02",
    }),
    { margin: "0px 20px 20px 0px" },
  ],
  content: [
    sprinkles({
      fontSize: "body-02",
      fontWeight: "body-02",
      color: "text-02",
    }),
    { margin: "8px 0px 0px 0px" },
  ],
});
