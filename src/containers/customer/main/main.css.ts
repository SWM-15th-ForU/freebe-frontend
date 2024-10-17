import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseWrapper = style({
  padding: "24px 0px",
  position: "relative",
  width: "100%",
});

export const sheetStyles = styleVariants({
  content: {
    display: "flex",
    width: "100%",
    padding: "0px 28px 20px 28px",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
    minHeight: "100%",
  },
  divider: [
    baseWrapper,
    sprinkles({ borderColor: "stroke-grey" }),
    {
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      flexBasis: "30%",
      flex: 0,
    },
  ],
  buttonWrapper: [
    {
      padding: "24px 0px",
      width: "100%",
      flex: 1,
      flexBasis: "30%",
      overflowY: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
  ],
  message: [
    texts["headline-03"],
    sprinkles({ color: "text-01" }),
    { whiteSpace: "pre-wrap" },
  ],
});

export const imageStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "bg-lightblue" }),
    {
      position: "relative",
      width: "100%",
      minHeight: "20vh",
      height: "fit-content",
    },
  ],
  logo: {
    position: "absolute",
    top: 24,
    left: 24,
  },
  image: {
    width: "100%",
    height: "auto",
  },
  bottom: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 30,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export const buttonsWrapper = style({
  width: "100%",
  flex: 1,
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
  gap: 15,
});
