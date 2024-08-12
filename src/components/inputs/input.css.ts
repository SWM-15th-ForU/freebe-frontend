import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseInput = style([
  sprinkles({ fontWeight: "body-02" }),
  {
    border: "none",
    width: "100%",
    margin: "auto",
    verticalAlign: "middle",
    backgroundColor: "transparent",
  },
]);

const baseWrapper = style([
  sprinkles({ borderColor: "grey" }),
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
]);

const InputStyles = styleVariants({
  container: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  title: [
    sprinkles({
      fontSize: "headline-03",
      fontWeight: "headline-03",
      color: "text-02",
    }),
  ],
  inputWrapper: [sprinkles({ backgroundColor: "white" }), baseWrapper],
  disabledInputWrapper: [
    sprinkles({ backgroundColor: "lightgrey" }),
    baseWrapper,
  ],
  input: [
    sprinkles({
      color: "text-02",
    }),
    baseInput,
  ],
  disabledInput: [
    sprinkles({
      color: "text-03",
    }),
    baseInput,
  ],
});

export default InputStyles;
