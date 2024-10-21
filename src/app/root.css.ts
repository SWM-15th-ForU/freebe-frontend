import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { keyframes, style, styleVariants } from "@vanilla-extract/css";

const rotateAnimation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const baseContainer = style({
  margin: "auto",
  width: "40vw",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 30,
  "@media": {
    [breakpoints.mobile]: { width: "100vw" },
  },
});

export const handlerStyles = styleVariants({
  sectionContainer: {
    width: "100%",
    padding: 30,
    display: "flex",
    flexDirection: "column",
    gap: 30,
    alignItems: "center",
  },
  container: [baseContainer],
  fullContainer: [baseContainer, { height: "100vh" }],
  header: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  message: [
    texts["headline-02"],
    sprinkles({
      color: "text-point",
    }),
  ],
  loader: {
    animation: `${rotateAnimation} 2s linear infinite`,
  },
});
