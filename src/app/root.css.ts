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
  container: [baseContainer],
  fullContainer: [baseContainer, { height: "100vh" }],
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
