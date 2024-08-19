import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const formDiv = style({
  width: "50%",
  margin: "auto",
  paddingTop: 50,
  alignSelf: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 15,
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

export const listDiv = style({
  backgroundColor: "#F5F5F5",
  borderRadius: 10,

  margin: 20,
  width: 700,
});

export const listHead = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 300,
  marginBottom: 20,
});

export const listBody = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
});

export const textInput = style({
  border: 0,
  width: "80%",
});

export const inputBox = style({
  backgroundColor: "#D9D9D9",
  borderRadius: 10,
  padding: 10,
  marginTop: 20,
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
