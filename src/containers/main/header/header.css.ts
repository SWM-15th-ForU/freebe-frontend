import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const headerContainer = style([
  sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
  {
    boxSizing: "border-box",
    top: 0,
    left: 0,
    position: "fixed",

    zIndex: 15,
    padding: "10px 40px",
    width: "100%",
    minWidth: 400,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
]);

export const profileContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: 30,
  gap: 20,
});

export const urlStyles = styleVariants({
  container: [
    sprinkles({
      fontSize: "body-01",
      backgroundColor: "bg-lightgrey",
    }),
    {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: 400,
      padding: "7px 6px 7px 12px",
      gap: 15,
    },
  ],
  content: [
    sprinkles({
      fontSize: "body-02",
      fontWeight: "body-02",
      color: "text-04",
    }),
    {
      flex: 1,
    },
  ],
});

export const menuStyles = styleVariants({
  dropdown: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      boxShadow: "0px 10px 25px 0px #00000026",
    },
  ],
  item: [
    sprinkles({
      color: "text-02",
      fontSize: "headline-03",
      fontWeight: "headline-03",
    }),
    {
      width: 200,
      textDecoration: "none",
    },
  ],
  logout: [sprinkles({ color: "pink" })],
});
