import { BLUE01 } from "@/styles/colors";
import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

const buttonStyles = styleVariants({
  kakao: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    gap: 12,
    border: 0,
    width: 184,
    height: 45,
    backgroundColor: "#FEE500",
    color: "#000000",
    borderRadius: 12,
    ":hover": {
      cursor: "pointer",
    },
  },
  add: [
    sprinkles({
      borderColor: "blue",
      color: "blue",
      backgroundColor: "white",
      fontWeight: "button-01",
    }),
    {
      width: "100%",
      height: 56,
      borderStyle: "solid",
      borderRadius: 8,
      borderWidth: 1,
      marginTop: 15,
      padding: 10,
    },
  ],
  link: [
    sprinkles({
      backgroundColor: "blue",
      fontSize: "button-01",
      fontWeight: "button-01",
      color: "white",
    }),
    {
      display: "flex",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: 10,
    },
  ],
  submit: [
    sprinkles({
      backgroundColor: "blue",
      color: "white",
      fontSize: "button-01",
      fontWeight: "button-01",
    }),
    {
      width: "100%",
      borderRadius: 8,
      marginTop: 20,
      height: 56,
      padding: 5,
      border: "none",
    },
  ],
  bottom: {
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    width: "100%",
    height: "72px",
    backgroundColor: BLUE01,
    bottom: 0,
    color: "white",
  },
});

export const closeStyles = styleVariants({
  container: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    alignItems: "center",
  },
  grey: [
    sprinkles({
      color: "stroke-grey",
    }),
  ],
  white: [
    sprinkles({
      color: "white",
    }),
  ],
});

export default buttonStyles;
