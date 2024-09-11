import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseProgress = style({
  height: 4,
  borderRadius: 100,
  flex: 1,
  position: "relative",
  "@media": {
    [breakpoints.mobile]: {
      backgroundColor: "#E7F2FB",
    },
  },
});

const baseName = style([
  texts["headline-03"],
  { flexShrink: 0, height: "100%" },
]);

export const statusStyles = styleVariants({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(to bottom, #F4F8FD 0%, #E6F1FD 100%)",
    maxWidth: 550,
    width: "100%",
    height: 150,
    borderRadius: 16,
    gap: 15,
    padding: "15px 40px",

    "@media": {
      [breakpoints.mobile]: {
        width: "100%",
        height: 120,
        maxWidth: "100%",
        padding: "20px 20px",
        gap: 10,
        background: "none",
      },
    },
  },
  doneProgress: [sprinkles({ backgroundColor: "blue" }), baseProgress],
  nowProgress: [
    sprinkles({ backgroundColor: "blue" }),
    { height: "100%", transition: "width 0.3s ease" },
  ],
  progress: [sprinkles({ backgroundColor: "white" }), baseProgress],
});

export const iconStyles = styleVariants({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
    position: "relative",
    width: "10%",
    overflow: "visible",
    maxWidth: 50,
  },
  wrapper: {
    overflow: "visible",
    height: "20%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    gap: 3,
  },
  name: [baseName, sprinkles({ color: "text-01" })],
  caption: [baseName, sprinkles({ color: "text-03" })],
});

const baseBanner = style([
  {
    width: "100%",
    aspectRatio: "1",
    borderRadius: 100,
    position: "relative",
  },
]);

export const bannerStyles = styleVariants({
  DONE: [
    sprinkles({
      backgroundColor: "blue",
    }),
    baseBanner,
  ],
  NOW: [
    sprinkles({
      backgroundColor: "blue",
    }),
    baseBanner,
    {
      outline: "1px solid #007AFF",
      outlineOffset: 3,
      "@media": {
        [breakpoints.mobile]: {
          outline: "none",
        },
      },
    },
  ],
  NOT_STARTED: [
    sprinkles({ backgroundColor: "white" }),
    baseBanner,
    {
      "@media": {
        [breakpoints.mobile]: {
          backgroundColor: "#E7F2FB",
        },
      },
    },
  ],
  wrapper: [
    texts["headline-03"],
    sprinkles({
      color: "text-04",
    }),
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      position: "relative",
      textAlign: "center",
    },
  ],
  image: {
    width: "50%",
    height: "50%",
    position: "relative",
  },
});
