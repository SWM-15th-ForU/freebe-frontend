import sprinkles from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";

const TextInputStyles = styleVariants({
  container: [
    {
      margin: 20,
    },
  ],
  title: [
    sprinkles({
      fontSize: "headline-03",
      color: "text-01",
    }),
  ],
  inputWrapper: [
    sprinkles({ borderColor: "grey", backgroundColor: "white" }),
    {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "56px",
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: "solid",
      padding: "12px",
      marginTop: 8,
    },
  ],
  input: [
    sprinkles({
      color: "text-02",
    }),
    {
      border: "none",
      width: "100%",
      margin: "auto",
    },
  ],
});

export default TextInputStyles;
