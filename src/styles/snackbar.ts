import { ColorValues, BorderValues } from "./bases/variables";
import { BoxShadowStyles } from "./bases/shadow";
import { SpacingStyles } from "./bases/spacing";
import { ShapeStyles } from "./bases/shape";

import { MIUIStyleNameEnum } from "../types";

export const SnackbarComponentsStyle: {[key in MIUIStyleNameEnum]: Partial<CSSStyleDeclaration>} = {
  [MIUIStyleNameEnum.Container]: {
    pointerEvents: "auto",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: "300px",
    minWidth: "200px",
    height: "fit-content",
    maxHeight: "120px",
    minHeight: "50px",
    zIndex: "9999",
    backgroundColor: `${ColorValues.background}`,
    ...BoxShadowStyles.BShadow4,
    ...ShapeStyles.Rounded8
  },

  [MIUIStyleNameEnum.Header]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "80px",
    aspectRatio: "1",
    backgroundColor: ColorValues.info,
    color: ColorValues.background,
    fontWeight: "700",
    ...SpacingStyles.P1,
    ...ShapeStyles.RoundedTopBottomLeft8
  },

  [MIUIStyleNameEnum.Body]: {
    width: "100%",
    ...SpacingStyles.P1
  },
  
  [MIUIStyleNameEnum.Footer]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...SpacingStyles.P1
  }
};

type SnackBarPositions = "Top" | "TopRight" | "TopLeft" | "Bottom" | "BottomRight" | "BottomLeft";

export const SnackbarPositionStyles: {[key in SnackBarPositions]: Partial<CSSStyleDeclaration>} = {
  Top: {
    top: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
    ...SpacingStyles.Mt1
  },

  TopRight: {
    top: "0",
    right: "0",
    // transform: "translate(-100%, 0)",
    ...SpacingStyles.Mt1,
    ...SpacingStyles.Me1
  },

  TopLeft: {
    top: "0",
    left: "0",
    ...SpacingStyles.Mt1,
    ...SpacingStyles.Ms1
  },

  Bottom: {
    bottom: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
    ...SpacingStyles.Mb1
  },

  BottomRight: {
    bottom: "0",
    right: "0",
    // transform: "translate(-100%, -100%)",
    ...SpacingStyles.Mb1,
    ...SpacingStyles.Me1
  },

  BottomLeft: {
    bottom: "0",
    left: "0",
    // transform: "translate(0, -100%)",
    ...SpacingStyles.Mb1,
    ...SpacingStyles.Ms1
  }
}