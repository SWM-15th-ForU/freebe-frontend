import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { keyframes, style, styleVariants } from "@vanilla-extract/css";

export const ModalStyle = style({
  borderRadius: 16,
  padding: 24,
  margin: 30,
});

export const ModalStyles = styleVariants({
  background: {
    zIndex: 8,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    overflowY: "hidden",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    zIndex: 10,
    borderRadius: 16,
    padding: 24,
    margin: 20,
    flex: 1,
    backgroundColor: "white",
    boxShadow: "0px 5px 15px 0px #00000025",
  },
});

export const mypageStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      padding: 40,
      position: "relative",
      height: "auto",
      overflowY: "scroll",
      flexGrow: 1,

      "@media": {
        [breakpoints.mobile]: {
          padding: "24px 20px",
        },
      },
    },
  ],
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
    {
      display: "block",
      height: 21.5,
    },
  ],
  content: [
    {
      width: "100%",
      paddingTop: 20,
      paddingBottom: 60,
      position: "relative",

      "@media": {
        [breakpoints.mobile]: {
          height: "100%",
        },
      },
    },
  ],
});

export const preparingStyle = styleVariants({
  container: [
    sprinkles({ color: "text-point" }),
    texts["headline-02"],
    {
      width: "100%",
      height: "100%",
      display: "flex",
      padding: 100,
      justifyContent: "center",
      textAlign: "center",
    },
  ],
});

const rotateAnimation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const baseContainer = style({
  width: "100%",
  height: "100%",
  padding: 40,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 30,
});

export const handlerStyles = styleVariants({
  container: [baseContainer],
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

export const headerLayoutStyles = styleVariants({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    overflow: "visible",
  },
  content: {
    flexGrow: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  },
});
