import sprinkles from "@/styles/sprinkles.css";
import { texts } from "@/styles/text.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseTimeSelectorContainer = style([
  sprinkles({
    borderColor: "stroke-grey",
    color: "text-01",
  }),
  texts["body-01"],
  {
    width: 90,
    position: "relative",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    padding: "8px 18px",
  },
]);

export const timeSelectorStyles = styleVariants({
  container: [
    sprinkles({
      backgroundColor: "white",
    }),
    baseTimeSelectorContainer,
  ],
  disabledContainer: [
    sprinkles({ backgroundColor: "bg-lightgrey" }),
    baseTimeSelectorContainer,
    {
      cursor: "default",
      ":hover": {
        filter: "none",
      },
    },
  ],
  dropdown: [
    sprinkles({ borderColor: "stroke-grey" }),
    {
      padding: "8px 0px 8px 8px",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      boxShadow: "0px 10px 25px 0px #00000026",
      display: "flex",
      maxHeight: 180,
    },
  ],
  list: { overflowY: "scroll", padding: 0 },
  selectedValue: [sprinkles({ backgroundColor: "blue", color: "white" })],
});

const baseCheckbox = style({
  borderRadius: 4,
  height: 24,
  width: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  flexShrink: 0,
});

export const checkboxStyles = styleVariants({
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  selected: [sprinkles({ backgroundColor: "blue" }), baseCheckbox],
  unSelected: [
    sprinkles({ borderColor: "stroke-grey" }),
    { borderWidth: 1, borderStyle: "solid" },
    baseCheckbox,
  ],
  wrapper: [
    texts["headline-03"],
    sprinkles({ color: "text-02" }),
    {
      background: "none",
      border: "none",
      display: "flex",
      gap: 8,
      alignItems: "flex-start",
      textAlign: "left",
    },
  ],
  link: [
    texts["body-02"],
    sprinkles({
      color: "text-04",
    }),
    { marginLeft: "auto", textDecoration: "none" },
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
    texts["headline-02"],
    sprinkles({
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
    texts["body-02"],
    sprinkles({
      color: "text-02",
    }),
    {
      marginRight: "auto",
    },
  ],
  date: [
    texts["body-02"],
    sprinkles({
      color: "text-04",
    }),
    {
      marginRight: 12,
    },
  ],
});

const baseInput = style([
  texts["body-02"],
  {
    border: "none",
    minWidth: "fit-content",
    flex: 1,
    margin: 0,
    verticalAlign: "middle",
    backgroundColor: "transparent",
    ":focus": {
      outline: "none",
    },
    "::placeholder": {
      color: "#849CAA",
    },
  },
]);

const baseWrapper = style([
  sprinkles({ borderColor: "stroke-grey" }),
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    height: "fit-content",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    paddingLeft: "12px",
    paddingRight: "12px",
    marginTop: 8,
  },
]);

const InputStyles = styleVariants({
  container: {
    width: "100%",
    minWidth: "fit-content",
    height: "fit-content",
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  title: [
    texts["headline-03"],
    sprinkles({
      color: "text-02",
    }),
    { lineHeight: "16px", padding: "4px 0px" },
  ],
  inputWrapper: [
    sprinkles({ backgroundColor: "white" }),
    baseWrapper,
    {
      ":focus-within": {
        outline: "#007AFF 1px solid",
      },
    },
  ],
  disabledInputWrapper: [
    sprinkles({ backgroundColor: "lightgrey" }),
    baseWrapper,
  ],
  smWrapper: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  mdWrapper: {
    paddingTop: 12,
    paddingBottom: 12,
  },
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
    texts["body-02"],
    sprinkles({
      color: "text-02",
    }),
    {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      gap: 5,
      marginRight: "auto",
    },
  ],
  multilineInput: [
    baseInput,
    {
      maxWidth: "100%",
      boxSizing: "border-box",
      minHeight: "30px",
      resize: "vertical",
    },
  ],
});

export default InputStyles;
