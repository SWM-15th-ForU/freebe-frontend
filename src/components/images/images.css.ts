import { BLUE01 } from "@/styles/colors";
import { styleVariants } from "@vanilla-extract/css";

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
