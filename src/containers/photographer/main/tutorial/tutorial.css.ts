import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { keyframes, style, styleVariants } from "@vanilla-extract/css";

export const tutorialModalStyles = styleVariants({
  root: {
    "@media": {
      [breakpoints.mobile]: {
        display: "none",
      },
    },
  },
  content: [
    sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
    {
      maxWidth: 500,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      boxShadow: "0px 10px 25px 0px #00000026",
      position: "absolute",
    },
  ],
});

export const mobileTutorialModalStyles = styleVariants({
  root: {
    display: "none",
    "@media": {
      [breakpoints.mobile]: {
        display: "block",
      },
    },
  },
  content: [
    sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
    {
      maxWidth: 500,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      boxShadow: "0px 10px 25px 0px #00000026",
      position: "absolute",
    },
  ],
});

const navButtonFrames = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(10px)" },
});

export const tutorialStyles = styleVariants({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  body: {
    margin: "15px 0px",
    paddingRight: 30,
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    alignItems: "center",
  },
  caption: [
    texts["caption-01"],
    sprinkles({ color: "text-point" }),
    { whiteSpace: "pre-wrap" },
  ],
  title: [
    texts["headline-02"],
    sprinkles({ color: "text-point" }),
    { display: "block", margin: "8px 0px" },
  ],
  content: [
    texts["body-01"],
    sprinkles({ color: "text-02" }),
    { whiteSpace: "pre-wrap" },
  ],
  navigation: [
    sprinkles({
      color: "blue",
      borderColor: "stroke-grey",
      backgroundColor: "white",
    }),
    {
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      width: 30,
      height: 30,
      borderStyle: "solid",
      borderWidth: 1,
      cursor: "pointer",
      boxShadow: "0px 5px 5px rgba(86, 152, 218, 0.15)",
      ":hover": {
        animation: `${navButtonFrames} 1s ease-in-out infinite`,
      },
    },
  ],
});

export const mobileTutorialStyles = styleVariants({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  body: {
    margin: "15px 0px",
    paddingRight: 30,
    "@media": {
      [breakpoints.mobile]: {
        paddingRight: 0,
      },
    },
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    alignItems: "center",
  },
  caption: [
    texts["caption-01"],
    sprinkles({ color: "text-point" }),
    { whiteSpace: "pre-wrap" },
  ],
  title: [
    texts["headline-02"],
    sprinkles({ color: "text-point" }),
    { display: "block", margin: "8px 0px" },
  ],
  content: [
    sprinkles({ color: "text-02" }),
    { whiteSpace: "pre-wrap", fontSize: 15 },
  ],
  navigation: [
    sprinkles({
      color: "blue",
      borderColor: "stroke-grey",
      backgroundColor: "white",
    }),
    {
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      width: 30,
      height: 30,
      borderStyle: "solid",
      borderWidth: 1,
      cursor: "pointer",
      boxShadow: "0px 5px 5px rgba(86, 152, 218, 0.15)",
      ":hover": {
        animation: `${navButtonFrames} 1s ease-in-out infinite`,
      },
    },
  ],
});
