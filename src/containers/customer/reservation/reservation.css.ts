import { styleVariants } from "@vanilla-extract/css";

export const reservationStyles = styleVariants({
  imageWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    ":not(:last-child)": {
      marginRight: "2%",
    },
    ":last-child": {
      marginRight: "auto",
    },
  },
  container: [
    {
      flex: 1,
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
  ],
});

export const detailStyles = styleVariants({
  container: {
    overflowY: "scroll",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});
