import sprinkles from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseCheckbox = style({
  borderRadius: 4,
  height: 24,
  width: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const checkboxStyles = styleVariants({
  selected: [sprinkles({ backgroundColor: "blue" }), baseCheckbox],
  unSelected: [
    sprinkles({ borderColor: "stroke-grey" }),
    { borderWidth: 1, borderStyle: "solid" },
    baseCheckbox,
  ],
});

export const countInputStyles = styleVariants({
  container: [
    sprinkles({
      borderColor: "stroke-grey",
    }),
    {
      display: "flex",
      flexDirection: "row",
      borderStyle: "solid",
      borderWidth: 1,
      width: "fit-content",
      height: 40,
    },
  ],
  button: [
    sprinkles({
      backgroundColor: "bg-lightgrey",
    }),
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      height: "100%",
      width: 40,
      aspectRatio: 1,
    },
  ],
  input: [
    sprinkles({
      fontSize: "headline-02",
      fontWeight: "headline-02",
      color: "text-01",
    }),
    { textAlign: "center", border: "none", height: "100%", width: 52 },
  ],
});

export const TimeInputStyles = styleVariants({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 4,
    marginTop: 10,
  },
  title: [
    sprinkles({
      fontSize: "body-02",
      fontWeight: "body-02",
      color: "text-02",
    }),
    {
      marginRight: "auto",
    },
  ],
  date: [
    sprinkles({
      fontSize: "body-02",
      fontWeight: "body-02",
      color: "text-04",
    }),
    {
      marginRight: 12,
    },
  ],
});

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
  sprinkles({ borderColor: "stroke-grey" }),
  {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "fit-content",
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
    height: "fit-content",
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
  contentWrapper: [
    sprinkles({
      color: "text-02",
      fontWeight: "body-02",
    }),
    {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      gap: 5,
      marginRight: "auto",
    },
  ],
  multilineInput: [baseInput, { height: "80px" }],
});

export default InputStyles;
