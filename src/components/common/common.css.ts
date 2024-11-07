import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { keyframes, style, styleVariants } from "@vanilla-extract/css";

export const captionStyle = style([
  texts["caption-01"],
  sprinkles({
    color: "text-03",
  }),
  {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    lineHeight: "20px",
  },
]);

const rotateAnimation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const loaderStyle = style({
  animation: `${rotateAnimation} 2s linear infinite`,
});

const baseIcon = style({
  transition: "transform 0.5s ease",
  paddingLeft: 3,
});

export const bottomSheetStyles = styleVariants({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    transition: "all 0.3s ease",
    width: "100%",
    maxHeight: "calc(100% - 50px)",
    backgroundColor: "white",
    overflowY: "visible",
    bottom: 0,
  },
  header: {
    position: "absolute",
    width: "100%",
    top: -40,
    height: 42,
    paddingTop: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    boxShadow: "0px -9px 8px 0px rgba(42, 126, 226, 0.1)",
  },
  handle: {
    width: "20%",
    height: 4,
    borderRadius: 2,
    backgroundColor: "#d0d0d0",
    margin: "auto",
  },
  body: {
    overflowY: "scroll",
    overflowX: "hidden",
    position: "relative",
    height: "100%",
  },
  control: [
    sprinkles({ borderColor: "stroke-grey", backgroundColor: "white" }),
    {
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: "100%",
      position: "absolute",
      top: -10,
      left: "calc(50% - 19px)",
      width: 38,
      height: 38,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  ],
  openIcon: [baseIcon, { transform: "rotate(270deg)" }],
  closeIcon: [baseIcon, { transform: "rotate(90deg)" }],
});

export const profileStyles = styleVariants({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
  },
  imageWrapper: {
    position: "relative",
    height: 48,
    width: 48,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  id: [texts["headline-03"], sprinkles({ color: "text-point" })],
  image: {
    borderRadius: 100,
  },
});

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
    }),
    texts["body-01"],
  ],
  disablePlaceholder: [
    sprinkles({
      color: "text-04",
    }),
    texts["body-01"],
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
});

export const searchStyles = styleVariants({
  container: [
    sprinkles({
      borderColor: "stroke-grey",
      backgroundColor: "white",
    }),
    {
      position: "relative",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      padding: 8,
      display: "flex",
      alignItems: "center",
      gap: 4,
      ":focus-within": {
        border: "1px solid #007AFF",
      },
    },
  ],
  input: [
    texts["body-01"],
    sprinkles({
      color: "text-03",
    }),
    {
      border: "none",
      flex: 1,
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
      color: "white",
    }),
    {
      maxWidth: "80%",
      borderRadius: 8,
      padding: "10px 14px",
      backgroundColor: "#1E1E1ECC",
      border: "none",
    },
    texts["body-02"],
  ],
});

const baseSwitch = style([
  texts["headline-03"],
  {
    minWidth: "fit-content",
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
      minWidth: "fit-content",
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
      width: "fit-content",
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
  {
    borderWidth: 1,
    borderStyle: "solid",
    padding: "4px 14px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    borderRadius: 100,
    gap: 6,
    margin: 0,
    transition: "background-color 0.5s ease-in-out",
  },
  texts["headline-03"],
]);

export const chipStyles = styleVariants({
  normal: [
    sprinkles({
      backgroundColor: "white",
      color: "text-02",
      borderColor: "stroke-grey",
    }),
    commonChipStyle,
  ],
  highlight: [
    commonChipStyle,
    sprinkles({
      backgroundColor: "white",
      color: "blue",
      borderColor: "blue",
    }),
  ],
  selectedContainer: [
    sprinkles({
      backgroundColor: "blue",
      color: "white",

      borderColor: "stroke-grey",
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
    marginBottom: 16,
    height: "auto",
    maxHeight: 216,
    overflowY: "scroll",
    justifyContent: "space-evenly",
  },
  item: [
    sprinkles({
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
    texts["headline-03"],
  ],
});

const baseToast = style([
  sprinkles({
    color: "white",
  }),
  {
    padding: 15,
    borderRadius: 10,
    "::before": { display: "none" },
  },
]);

export const toastStyles = styleVariants({
  root: [
    baseToast,
    sprinkles({
      backgroundColor: "blue",
    }),
  ],
  error: [
    baseToast,
    {
      backgroundColor: "#E4473D",
    },
  ],
  title: [
    sprinkles({
      color: "white",
    }),
    texts["headline-03"],
  ],
  description: [
    sprinkles({
      color: "white",
    }),
    texts["body-02"],
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
  container: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    {
      aspectRatio: "1",
      position: "relative",
      marginTop: 15,
    },
  ],
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
  button: {
    zIndex: 3,
    position: "relative",
    width: "100%",
    background: "none",
    border: "none",
    justifyContent: "flex-end",
    display: "flex",
    padding: 4,
  },
});
