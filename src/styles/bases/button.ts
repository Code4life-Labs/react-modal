import { BorderValues } from "./variables"

import { ShapeStyles } from "./shape"
import { SpacingStyles } from "./spacing"
import { ColorValues } from "./variables"

enum ButtonStyleNameEnum {
  Btn = "Btn",
  BtnWhite = "BtnWhite",
  BtnBlue = "BtnBlue",
  BtnGreen = "BtnGreen",
  BtnRed = "BtnRed",
  BtnTransparent20 = "BtnTransparent20",
  BtnBorder = "BtnBorder",
  BtnClose = "BtnClose"
}

export const ButtonStyles: {[key in ButtonStyleNameEnum]: React.CSSProperties} = {
  [ButtonStyleNameEnum.Btn]: {
    cursor: "pointer",
    ...SpacingStyles.Px2,
    ...SpacingStyles.Py1,
    ...ShapeStyles.Rounded8
  },

  [ButtonStyleNameEnum.BtnWhite]: {
    background: ColorValues.background,
    color: ColorValues.onBackground
  },

  [ButtonStyleNameEnum.BtnBlue]: {
    background: ColorValues.info,
    color: ColorValues.background
  },

  [ButtonStyleNameEnum.BtnGreen]: {
    background: ColorValues.success,
    color: ColorValues.background
  },

  [ButtonStyleNameEnum.BtnRed]: {
    background: ColorValues.error,
    color: ColorValues.background
  },

  [ButtonStyleNameEnum.BtnTransparent20]: {
    background: `rgba(${ColorValues.rgbBackground, 20})`,
    color: ColorValues.onBackground
  },

  [ButtonStyleNameEnum.BtnBorder]: {
    border: `${BorderValues.border2} ${ColorValues.outline}`
  },

  [ButtonStyleNameEnum.BtnClose]: {
    cursor: "pointer",
    boxSizing: "content-box",
    border: "none",
    outline: "none",
    width: '1rem',
    height: '1rem',
    background: `transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat`,
    ...SpacingStyles.Px0,
    ...SpacingStyles.Py0,
  }
}