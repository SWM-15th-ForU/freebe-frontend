import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const joinStyles = styleVariants({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: 660,
    margin: "auto",
    padding: "30px 0px 60px 0px",

    "@media": {
      [breakpoints.mobile]: {
        width: "100%",
        padding: "30px 20px 60px 20px",
      },
    },
  },
  title: [
    texts["headline-02"],
    sprinkles({ color: "text-point" }),
    { marginTop: 40 },
  ],
});

export const profileStyles = styleVariants({
  container: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      marginTop: 20,
      borderTopWidth: 1,
      borderTopStyle: "solid",
    },
  ],
  image: {
    width: 108,
    height: 108,
    position: "relative",
    "@media": {
      [breakpoints.mobile]: {
        width: 90,
        height: 90,
        alignSelf: "center",
      },
    },
  },
  edit: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 28,
    position: "relative",
    "@media": {
      [breakpoints.mobile]: {
        flexDirection: "column-reverse",
      },
    },
  },
  button: {
    gap: 10,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    "@media": {
      [breakpoints.mobile]: {
        justifyContent: "center",
      },
    },
  },
  error: [
    texts["caption-01"],
    sprinkles({
      color: "pink",
    }),
    { margin: 3, display: "block", position: "static" },
  ],
});

const baseWrapper = style([
  sprinkles({ color: "text-02" }),
  {
    display: "flex",
    gap: 8,
    alignItems: "center",
    paddingBottom: 20,
  },
]);

export const agreementStyles = styleVariants({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  total: [texts["headline-02"]],
  totalWrapper: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      paddingBottom: 20,
    },
  ],
  wrapper: [baseWrapper, texts["headline-03"]],

  box: [
    texts["body-02"],
    sprinkles({ borderColor: "stroke-grey", color: "text-03" }),
    {
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      padding: 16,
      maxHeight: 150,
      overflowY: "scroll",
      textAlign: "justify",
    },
  ],
});
