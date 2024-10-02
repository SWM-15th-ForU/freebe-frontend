import { styleVariants } from "@vanilla-extract/css";

export const datePickerInputStyles = styleVariants({
  root: {
    position: "absolute",
    right: 40,
    bottom: 20,
    height: 20,
    width: 10,
    visibility: "hidden",
  },
  input: {
    height: 0,
    width: 0,
    padding: 0,
  },
});

export const paginationStyles = styleVariants({
  control: {
    border: "none",
  },
});
