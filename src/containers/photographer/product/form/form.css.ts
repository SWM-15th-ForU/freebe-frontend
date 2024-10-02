import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const formStyles = styleVariants({
  container: {
    minWidth: "fit-content",
    maxWidth: 750,
    margin: "auto",
    alignSelf: "flex-start",
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
  ],
  text: [sprinkles({ color: "text-02" }), { fontSize: 15, fontWeight: 400 }],
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
      "@media": {
        [breakpoints.mobile]: {
          paddingBottom: 20,
        },
      },
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
      ":disabled": {
        background: "none",
      },
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

const baseInput = style({
  resize: "none",
  height: "fit-content",
  ":disabled": {
    background: "none",
  },
});

export const textInput = style([
  texts["body-02"],
  baseInput,
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
    marginBottom: 10,
    alignItems: "flex-start",
  },
  head: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 10,
  },
  title: [
    baseInput,
    texts["headline-03"],
    sprinkles({
      color: "text-02",
    }),
    {
      display: "block",
      background: "none",
      border: "none",
    },
  ],
  description: [
    baseInput,
    texts["body-02"],
    sprinkles({
      color: "text-03",
    }),
    {
      "::placeholder": {
        color: "#849DAB",
      },
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
