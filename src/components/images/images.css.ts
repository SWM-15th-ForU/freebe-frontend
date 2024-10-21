import { breakpoints } from "@/styles/breakpoints.css";
import { BLUE01 } from "@/styles/colors";
import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseButton = style({
  background: "none",
  border: "none",
  "@media": {
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

export const profileStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "bg-lightblue", borderColor: "stroke-grey" }),
    {
      borderRadius: "100%",
      borderWidth: 1,
      borderStyle: "solid",
      width: "100%",
      aspectRatio: "1",
      position: "relative",
    },
  ],
  imageWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  iconWrapper: {
    width: "60%",
    height: "100%",
    margin: "auto",
    position: "relative",
  },
  image: {
    objectFit: "cover",
    borderRadius: "100%",
  },
});

export const GridStyles = styleVariants({
  container: {
    width: "calc(calc(100% - 10px) / 2)",
  },
  image: {
    width: "100%",
    position: "relative",
    height: "auto",
    objectFit: "contain",
    outlineStyle: "solid",
    outlineOffset: -1,
    outlineColor: BLUE01,
    boxSizing: "content-box",
  },
});

export const fullStyles = styleVariants({
  root: {
    width: "100vw",
    padding: 0,
  },
  inner: {
    padding: 0,
    alignItems: "center",
  },
  content: {
    background: "none",
    width: "100vw",
    height: "100vh",
    position: "relative",
    boxShadow: "none",
    borderRadius: 0,
    flex: 1,
  },
  body: {
    display: "flex",
    flexDirection: "column",
  },
  move: [baseButton],
  disabledMove: [baseButton, { visibility: "hidden" }],
  wrapper: {
    display: "flex",
    gap: 12,
    width: "100%",
    overflowX: "scroll",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    height: "60vh",
    width: "100%",
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  image: {
    display: "block",
    width: "auto",
    height: "auto",
    margin: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "relative",
  },
  imageContainer: {
    flex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
});
