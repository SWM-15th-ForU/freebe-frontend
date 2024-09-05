import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const formStyles = styleVariants({
  container: {
    width: "100%",
    margin: "auto",
    paddingTop: 50,
    alignSelf: "flex-start",
  },
  title: [
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
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
    sprinkles({
      fontSize: "headline-03",
      fontWeight: "headline-03",
      color: "text-02",
    }),
    { marginBottom: 20 },
  ],
  input: [
    sprinkles({ fontSize: "body-02", fontWeight: "body-02", color: "text-02" }),
    {
      border: 0,
      width: "100%",
      marginTop: 10,
    },
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
    sprinkles({
      fontSize: "headline-03",
      fontWeight: "headline-03",
      color: "text-point",
    }),
  ],
  content: [
    sprinkles({
      fontSize: "body-02",
      fontWeight: "body-02",
      color: "text-02",
    }),
  ],
  statusWrapper: [
    sprinkles({
      fontSize: "button-02",
      fontWeight: "button-01",
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
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
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
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
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
    sprinkles({
      backgroundColor: "blue",
      fontSize: "button-02",
      fontWeight: "button-01",
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

export const textInput = style({
  border: 0,
  width: "100%",
  marginTop: 15,
});

export const inputStyles = styleVariants({
  headWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginBottom: 5,
  },
  title: [
    sprinkles({
      fontSize: "headline-03",
      fontWeight: "headline-03",
      color: "text-02",
    }),
    {
      background: "none",
      border: "none",
    },
  ],
  description: [
    sprinkles({
      fontSize: "body-02",
      fontWeight: "body-02",
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
    sprinkles({
      fontSize: "body-02",
      fontWeight: "body-02",
      color: "text-02",
      backgroundColor: "white",
      borderColor: "stroke-grey",
    }),
    {
      marginTop: 16,
      width: "100%",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      padding: "8px 12px",
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
