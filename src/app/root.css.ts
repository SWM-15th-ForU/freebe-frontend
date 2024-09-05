import sprinkles from "@/styles/sprinkles.css";
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
});

export const handlerStyles = styleVariants({
  container: [baseContainer],
  fullContainer: [baseContainer, { height: "100vh" }],
  message: [
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
      color: "text-point",
    }),
  ],
  loader: {
    animation: `${rotateAnimation} 2s linear infinite`,
  },
});
