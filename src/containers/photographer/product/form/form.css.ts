import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const formStyles = styleVariants({
  container: {
    width: "70%",
    minWidth: "fit-content",
    maxWidth: 750,
    margin: "auto",
    paddingTop: 50,
    paddingBottom: 80,
    alignSelf: "flex-start",

    "@media": {
      [breakpoints.mobile]: {
        padding: 20,
      },
    },
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
  ],
  wrapper: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      marginTop: 28,
      padding: 40,
      borderRadius: 16,
      borderWidth: 1,
      borderStyle: "solid",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 15,

      "@media": {
        [breakpoints.mobile]: {
          padding: 16,
        },
      },
    },
  ],
  split: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      paddingBottom: 40,
      width: "100%",
      minWidth: "fit-content",
    },
  ],
  subtitle: [
    texts["headline-03"],
    sprinkles({
      color: "text-02",
    }),
    { marginBottom: 20 },
  ],
  input: [
    texts["body-02"],
    sprinkles({ color: "text-02" }),
    {
      border: 0,
      width: "100%",
      marginTop: 10,
    },
  ],
  error: [
    texts["caption-01"],
    sprinkles({
      color: "pink",
    }),
    { margin: 3, display: "block" },
  ],
});

export const textInput = style([
  texts["body-02"],
  sprinkles({
    color: "text-02",
  }),
  {
    border: 0,
    flex: 1,
    ":focus": {
      outline: "none",
    },
  },
]);

export const inputStyles = styleVariants({
  headWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginBottom: 5,
  },
  title: [
    texts["headline-03"],
    sprinkles({
      color: "text-02",
    }),
    {
      background: "none",
      border: "none",
    },
  ],
  description: [
    texts["body-02"],
    sprinkles({
      color: "text-03",
    }),
    {
      background: "none",
      border: "none",
      width: "100%",
    },
  ],
  box: [
    sprinkles({
      backgroundColor: "bg-lightgrey",
    }),
    {
      minWidth: "fit-content",
      position: "relative",
      borderRadius: 8,
      padding: 20,
      marginTop: 20,
    },
  ],
  content: [
    texts["body-02"],
    sprinkles({
      color: "text-02",
      backgroundColor: "white",
      borderColor: "stroke-grey",
    }),
    {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 16,
      width: "100%",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      padding: "8px 12px",
      ":focus": {
        borderColor: "#007AFF",
      },
    },
  ],
});
