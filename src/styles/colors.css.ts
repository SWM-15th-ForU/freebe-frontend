import { styleVariants, ComplexStyleRule } from "@vanilla-extract/css";
import { ActiveStatus } from "reservation-types";
import sprinkles from "./sprinkles.css";

export const reservationColors = styleVariants<
  Record<ActiveStatus, ComplexStyleRule>
>({
  NEW: [sprinkles({ color: "blue" })],
  IN_PROGRESS: [sprinkles({ color: "green" })],
  WAITING_FOR_DEPOSIT: [
    sprinkles({
      color: "yellow",
    }),
  ],
  WAITING_FOR_PHOTO: [sprinkles({ color: "pink" })],
});
