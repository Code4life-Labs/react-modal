import { ColorValues } from "./bases/variables";
import { BoxShadowStyles } from "./bases/shadow";
import { SpacingStyles } from "./bases/spacing";
import { ShapeStyles } from "./bases/shape";

import { MIUIStyleNameEnum } from "../types";

export const SideComponentsStyle: {[key in MIUIStyleNameEnum]: React.CSSProperties} = {
  [MIUIStyleNameEnum.Container]: {
    pointerEvents: "auto",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "360px",
    minWidth: "300px",
    height: "100vh",
    margin: "0 auto",
    backgroundColor: `${ColorValues.background}`,
    ...BoxShadowStyles.BShadow1
  },

  [MIUIStyleNameEnum.Header]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "700",
    ...SpacingStyles.P1
  },

  [MIUIStyleNameEnum.Body]: {
    height: "fit-content",
    flexGrow: "1",
    ...SpacingStyles.P1
  },
  
  [MIUIStyleNameEnum.Footer]: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    ...SpacingStyles.P1
  }
};

export const SidePlaceOnStyles: {[key in "Left" | "Right"]: Partial<CSSStyleDeclaration>} = {
  Left: {
    top: "0",
    left: "0"
  },

  Right: {
    top: "0",
    right: "0"
  }
}