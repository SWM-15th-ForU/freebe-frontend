import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { styleVariants } from "@vanilla-extract/css";

export const joinStyles = styleVariants({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: 660,
    margin: "auto",
    gap: 60,
    padding: "30px 0px 60px 0px",

    "@media": {
      [breakpoints.mobile]: {
        width: "100%",
      },
    },
  },
});

export const profileStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    { width: "100%", borderRadius: 16, display: "flex", padding: 32, gap: 24 },
  ],
  image: {
    width: 108,
    height: 108,
    position: "relative",
  },
  edit: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 28,
    position: "relative",
  },
  button: { gap: 10, width: "100%", display: "flex" },
  error: [
    texts["caption-01"],
    sprinkles({
      color: "pink",
    }),
    { margin: 3, display: "block", position: "static" },
  ],
});
