import { styleVariants } from "@vanilla-extract/css";

export const GridStyles = styleVariants({
  container: {
    width: "calc(calc(100% - 5px) / 2)",
  },
  image: {
    width: "100%",
    position: "relative",
    height: "auto",
    objectFit: "contain",
    outlineStyle: "solid",
    outlineOffset: -1,
    boxSizing: "content-box",
  },
});
