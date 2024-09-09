import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const formStyles = styleVariants({
  container: {
    width: "70%",
    maxWidth: 750,
    margin: "auto",
    paddingTop: 50,
    alignSelf: "flex-start",
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
    },
  ],
  split: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      paddingBottom: 40,
      width: "100%",
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
    sprinkles({
      fontSize: "caption-01",
      fontWeight: "caption-01",
      color: "pink",
    }),
    { margin: 3, display: "block" },
  ],
});

export const bannerStyles = styleVariants({
  container: [
    sprinkles({
      borderColor: "stroke-grey",
      backgroundColor: "white",
    }),
    {
      borderRadius: 9,
      borderWidth: 1,
      borderStyle: "solid",

      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: 270,
      gap: 10,
    },
  ],
  infoWrapper: [
    { padding: 16, display: "flex", flexDirection: "column", flex: 1 },
  ],
  title: [
    texts["headline-03"],
    sprinkles({
      color: "text-point",
    }),
  ],
  content: [
    texts["body-02"],
    sprinkles({
      color: "text-02",
    }),
  ],
  statusWrapper: [
    texts["button-01"],
    sprinkles({
      color: "text-03",
    }),
    {
      alignSelf: "flex-end",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      marginTop: 19,
    },
  ],
});

export const listStyles = styleVariants({
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
  ],
  div: {
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: "white",
    padding: 24,
  },
  head: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
    {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 300,
      marginBottom: 10,
    },
  ],
  body: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
  add: [
    texts["button-01"],
    sprinkles({
      backgroundColor: "blue",
      color: "white",
    }),
    {
      borderRadius: 4,
      textDecoration: "none",
      padding: "8px 20px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  ],
});

export const textInput = style([
  sprinkles({
    fontSize: "body-02",
    fontWeight: "body-02",
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
        outline: "none",
      },
    },
  ],
});

export const headerStyle = {
  container: style({
    position: "fixed",
    zIndex: 3,
    backgroundColor: "#fff",
    top: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "8vw",
    padding: 25,
    flexDirection: "row",
    justifyContent: "flex-start",
    overflow: "scroll",
    msOverflowStyle: "none",
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
};

export const iconStyle = {
  container: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  image: style({
    backgroundColor: "#D9D9D9",
    borderRadius: "100%",
    width: "70px",
    aspectRatio: "1",
  }),
  title: style({
    margin: 0,
  }),
};
