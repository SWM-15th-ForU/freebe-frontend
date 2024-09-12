import { styleVariants } from "@vanilla-extract/css";

export const profileStyles = styleVariants({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    gap: 24,
    position: "relative",
  },
  preview: {
    backgroundColor: "blue",
    width: 300,
  },
});
