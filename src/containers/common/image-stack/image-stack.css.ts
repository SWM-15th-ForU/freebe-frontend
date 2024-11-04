import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { keyframes, style, styleVariants } from "@vanilla-extract/css";

const navButtonFrames = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(10px)" },
});

const navButtonStyle = style([
  texts["button-01"],
  sprinkles({
    color: "blue",
    borderColor: "stroke-grey",
  }),
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    cursor: "pointer",
    padding: "8px 12px",
    zIndex: 1,
    boxShadow: "0px 5px 5px rgba(86, 152, 218, 0.15)",
    ":hover": {
      animation: `${navButtonFrames} 1s ease-in-out infinite`,
    },
    ":active": {
      animation: `${navButtonFrames} 1s ease-in-out infinite`,
    },
    "@media": {
      [breakpoints.mobile]: {
        aspectRatio: "1",
      },
    },
  },
]);

export const imageStackStyles = styleVariants({
  container: [
    {
      alignSelf: "center",
      marginTop: 30,
      marginBottom: 80,
      minWidth: 600,
      flex: "1 0 60%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundImage: `url("/images/freebe-background.png")`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      "@media": {
        "screen and (max-height: 900px)": {
          minWidth: 300,
        },
        [breakpoints.mobile]: {
          minWidth: 300,
          width: "100%",
          margin: "40px 0",
        },
      },
    },
  ],
  stack: {
    position: "relative",
    height: "auto",
    aspectRatio: "2 /3",
    flexShrink: 1,
    flexBasis: "300px",
    maxWidth: "500px",
    "@media": {
      [breakpoints.mobile]: {
        maxWidth: "60%",
      },
    },
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease, opacity 0.5s ease",
    willChange: "transform, opacity",
  },
  hiddenImage: {
    transform: "rotate(10deg)",
  },
  visibleImage: {
    zIndex: 1,
    opacity: 1,
    transform: "scale(1) rotate(0deg)",
  },
  buttonWrapper: {
    border: "none",
    background: "none",
    ":hover": {
      filter: "none",
    },
    ":active": {
      filter: "none",
    },
  },
  prev: [navButtonStyle, { left: "-50px" }],
  next: [navButtonStyle, { right: "-50px" }],
  text: {
    "@media": {
      [breakpoints.mobile]: {
        display: "none",
      },
    },
  },
});
