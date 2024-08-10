import { styleVariants } from "@vanilla-extract/css";

export const SelectedStyles = styleVariants({
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
});
