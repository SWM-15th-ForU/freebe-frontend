import { breakpoints } from "@/styles/breakpoints.css";
import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

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
      flexDirection: "column",
    },
  ],
  imageWrapper: [
    sprinkles({
      borderColor: "stroke-grey",
      backgroundColor: "white",
    }),
    {
      position: "relative",
      width: "100%",
      height: 200,
      borderTopLeftRadius: 9,
      borderTopRightRadius: 9,
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
    },
  ],
  image: {
    objectFit: "cover",
    borderTopLeftRadius: 9,

    borderTopRightRadius: 9,
  },
  infoWrapper: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      padding: 16,
      display: "flex",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      alignItems: "center",
      justifyContent: "space-between",
    },
  ],
  title: [
    texts["headline-03"],
    sprinkles({
      color: "text-point",
    }),
    { display: "block" },
  ],
  content: [
    texts["body-02"],
    sprinkles({
      color: "text-02",
    }),
    { display: "block" },
  ],
  controlWrapper: [
    texts["button-02"],
    sprinkles({
      color: "text-03",
    }),
    {
      padding: 16,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
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
    minWidth: 300,
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
      marginBottom: 20,
    },
  ],
  body: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 10,
    minWidth: "100%",
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
        padding: "20px 20px 50px 20px",
      },
    },
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-02",
    }),
  ],
});
