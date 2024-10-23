import { breakpoints } from "@/styles/breakpoints.css";
import { styleVariants } from "@vanilla-extract/css";

export const customedCarouselStyles = styleVariants({
  root: {
    position: "relative",
    width: 700,
    aspectRatio: "4",

    "@media": {
      [breakpoints.mobile]: {
        width: "100%",
      },
    },
  },
  viewport: {
    height: "100%",
  },
  container: {
    height: "100%",
  },
  slide: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
});

export const noticeBannerStyles = styleVariants({
  image: {
    borderRadius: 24,
    objectFit: "cover",
  },
});
