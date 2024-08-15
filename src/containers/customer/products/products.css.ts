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

export const infoStyle = {
  wrapper: style({
    display: "flex",
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "column",
    gap: 5,
  }),
  container: style({
    border: "solid",
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#a5a5a5",
    gap: 10,
  }),
};

export const infoContainer = style({
  flex: 1,
  padding: 15,
});
