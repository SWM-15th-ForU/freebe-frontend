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
    padding: "5px 16px",
    display: "flex",
    alignItems: "center",
    borderRadius: 100,
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
  selected: [
    sprinkles({
      backgroundColor: "blue",
      color: "white",
    }),
    baseSwitch,
  ],
  unselected: [sprinkles({ color: "text-03" }), baseSwitch],
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

export const thumbnailStyles = styleVariants({
  container: {
    aspectRatio: "1",
    position: "relative",
    marginTop: 15,
  },
  represent: [
    sprinkles({ borderColor: "blue" }),
    {
      borderWidth: 2,
      borderStyle: "solid",
    },
  ],
  representMark: [
    sprinkles({
      backgroundColor: "blue",
      color: "white",
    }),
    { padding: "4px 8px", zIndex: 3, position: "absolute", bottom: 0, left: 0 },
  ],
});
