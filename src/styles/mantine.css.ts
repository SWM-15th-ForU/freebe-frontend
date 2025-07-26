import { styleVariants } from "@vanilla-extract/css";
import { texts } from "./text.css";
import sprinkles from "./sprinkles.css";

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

export const commonTabsStyles = styleVariants({
  list: [
    sprinkles({ backgroundColor: "white" }),
    { border: "none", padding: "8px 0px 0px 16px" },
  ],
  tab: [texts["headline-03"], sprinkles({ color: "text-02" })],
});

export const carouselStyles = styleVariants({
  indicator: {
    width: "8px",
    height: "8px",
    backgroundColor: "white",
    borderRadius: "50%",
    transition: "background-color 0.3s ease",

    selectors: {
      "&[data-active]": { transition: "none", backgroundColor: "#007AFF" },
    },
  },
});

export const commonModalStyles = styleVariants({
  content: {
    borderRadius: 16,
    padding: "0px 16px 16px 16px",
  },
  header: {
    padding: 30,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  title: [
    texts["headline-02"],
    sprinkles({
      color: "text-point",
    }),
  ],
  info: [
    texts["body-02"],
    sprinkles({
      color: "text-02",
    }),
  ],
  close: {
    position: "absolute",
    top: 25,
    right: 10,
  },
});
