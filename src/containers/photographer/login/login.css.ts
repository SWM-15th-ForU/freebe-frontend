import sprinkles from "@/styles/sprinkles.css";
import { keyframes, style, styleVariants } from "@vanilla-extract/css";

export const loginStyles = styleVariants({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: [
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
      color: "blue",
    }),
  ],
  subtitle: [
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
      color: "text-01",
    }),
  ],
});

const navButtonFrames = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(10px)" },
});

const navButtonStyle = style([
  sprinkles({
    color: "blue",
    fontSize: "button-01",
    fontWeight: "button-01",
    borderColor: "stroke-grey",
  }),
  {
    display: "flex",
    alignItems: "center",
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
  },
]);

export const imageStackStyles = styleVariants({
  container: [
    {
      alignSelf: "center",
      margin: "80px 0",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundImage: `url("/images/freebe-background.png")`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  ],
  stack: {
    position: "relative",
    width: "300px",
    minWidth: "300px",
    height: "400px",
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
  },
  prev: [navButtonStyle, { left: "-50px" }],
  next: [navButtonStyle, { right: "-50px" }],
});
