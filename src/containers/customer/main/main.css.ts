import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const sheetContainer = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  bottom: 0,
  height: "50%",
  width: "100%",
  backgroundColor: "white",
  overflowY: "hidden",
  padding: 30,
  paddingBottom: 60,
});

const baseWrapper = style({
  padding: "24px 0px",
  position: "relative",
  width: "100%",
});

export const sheetStyles = styleVariants({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minHeight: "30vh",
    width: "100%",
    backgroundColor: "white",
    overflowY: "visible",
    height: "70vh",
  },
  header: {
    position: "absolute",
    width: "100%",
    top: -30,
    height: 30,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  content: {
    flex: 1,
    display: "flex",
    height: "100%",
    padding: "0px 28px 20px 28px",
    flexDirection: "column",
    alignItems: "center",
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
    // baseWrapper,
    {
      margin: 24,
      width: "100%",
      flex: 1,
      flexBasis: "30%",
      overflowY: "hidden",
      position: "relative",
    },
  ],
  scrollArea: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    height: "100%",
    overflowY: "scroll",
  },
  message: [texts["headline-03"], sprinkles({ color: "text-01" })],
});

export const imageStyles = styleVariants({
  container: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      position: "relative",
      width: "100%",
      height: "fit-content",
      minHeight: "50%",
    },
  ],
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
