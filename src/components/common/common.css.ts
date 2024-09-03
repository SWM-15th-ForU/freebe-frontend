import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseDropdown = style([
  sprinkles({
    borderColor: "stroke-grey",
  }),
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 56,
    borderWidth: 1,
    borderStyle: "solid",
    margin: "24px 0px",
    padding: "20px 24px",
  },
]);

export const DropdownStyles = styleVariants({
  area: {
    position: "relative",
  },
  container: [baseDropdown],
  disableContainer: [
    baseDropdown,
    sprinkles({ backgroundColor: "bg-lightgrey" }),
  ],
  placeholder: [
    sprinkles({
      color: "text-02",
      fontSize: "body-01",
      fontWeight: "body-01",
    }),
  ],
  disablePlaceholder: [
    sprinkles({
      color: "text-04",
      fontSize: "body-01",
      fontWeight: "body-01",
    }),
  ],
  icon: [sprinkles({ color: "skyblue" })],
  list: [
    sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
    {
      zIndex: 5,
      width: "100%",
      position: "absolute",
      top: 60,
      borderWidth: 1,
      borderRadius: 8,
      borderStyle: "solid",
      boxShadow: "0px 10px 25px 0px #00000026",
    },
  ],
  listItems: [
    {
      padding: "16px 20px",
      height: 56,
    },
  ],
});

export const searchStyles = styleVariants({
  container: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      padding: "0px 8px",
      display: "flex",
      alignItems: "center",
      gap: 4,
      ":focus-within": {
        outline: "1px solid #007AFF",
      },
    },
  ],
  input: [
    sprinkles({
      fontSize: "body-01",
      fontWeight: "body-01",
      color: "text-03",
    }),
    {
      border: "none",
      ":focus": {
        outline: "none",
        border: "none",
      },
    },
  ],
});

export const infoStyles = styleVariants({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  dropdown: [
    sprinkles({
      fontSize: "body-02",
      fontWeight: "body-02",
      color: "white",
    }),
    {
      maxWidth: "80%",
      borderRadius: 8,
      padding: "10px 14px",
      backgroundColor: "#1E1E1ECC",
      border: "none",
    },
  ],
});

const baseSwitch = style([
  sprinkles({
    fontSize: "button-02",
    fontWeight: "button-01",
  }),
  {
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    borderRadius: 100,
    border: "none",
    gap: 6,
    transition: "background-color 0.5s",
  },
]);

export const switchStyles = styleVariants({
  container: [
    sprinkles({
      backgroundColor: "white",
    }),
    {
      display: "flex",
      flexDirection: "row",
      borderRadius: 100,
    },
  ],
  borderContainer: [
    sprinkles({
      backgroundColor: "bg-lightgrey",
      borderColor: "stroke-grey",
    }),
    {
      display: "flex",
      flexDirection: "row",
      borderRadius: 100,
      borderStyle: "solid",
      borderWidth: 1,
      padding: 1,
    },
  ],
  selected: [
    sprinkles({
      backgroundColor: "blue",
      color: "white",
    }),
    baseSwitch,
  ],
  unselected: [
    sprinkles({ color: "text-03" }),
    baseSwitch,
    { background: "none" },
  ],
});

const commonChipStyle = style([
  sprinkles({
    fontSize: "headline-03",
    fontWeight: "headline-03",
    borderColor: "stroke-grey",
  }),
  {
    borderWidth: 1,
    borderStyle: "solid",
    padding: "8px 16px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    borderRadius: 100,
    gap: 6,
    margin: 0,
    transition: "background-color 0.5s ease-in-out",
  },
]);

export const chipStyles = styleVariants({
  container: [
    sprinkles({
      backgroundColor: "white",
      color: "text-02",
    }),
    commonChipStyle,
  ],
  selectedContainer: [
    sprinkles({
      backgroundColor: "blue",
      color: "white",
    }),
    commonChipStyle,
  ],
  caption: [
    sprinkles({
      color: "text-04",
    }),
    { fontSize: 12, fontWeight: 500 },
  ],
});

export const filterStyles = styleVariants({
  dropdown: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      padding: "16px 20px",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      boxShadow: "0px 10px 25px 0px #00000026",
    },
  ],
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    margin: "16px 0px",
    height: "auto",
    maxHeight: 216,
    overflowY: "scroll",
    justifyContent: "space-evenly",
  },
  item: [
    sprinkles({
      fontSize: "headline-03",
      fontWeight: "headline-03",
      color: "text-02",
    }),
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      border: "none",
      background: "none",
      gap: 8,
      cursor: "pointer",
    },
  ],
});

export const toastStyles = styleVariants({
  root: [
    sprinkles({
      backgroundColor: "blue",
      color: "white",
    }),
    {
      padding: 15,
      borderRadius: 10,
      "::before": { display: "none" },
    },
  ],
  title: [
    sprinkles({
      color: "white",
      fontSize: "headline-03",
      fontWeight: "headline-03",
    }),
  ],
  description: [
    sprinkles({
      fontSize: "body-02",
      fontWeight: "body-02",
      color: "white",
    }),
  ],
  closeButton: [
    sprinkles({
      color: "white",
    }),
    {
      selectors: {
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  ],
});
