import { FontValues } from "./variables";

enum FontStyleNameEnum {
  Fs0 = "Fs0",
  Fs1 = "Fs1",
  Fs2 = "Fs2",
  Fs3 = "Fs3",
  Fs4 = "Fs4",
  Fs5 = "Fs5",
  FwThin = "FwThin",
  FwExLight = "FwExLight",
  FwLight = "FwLight",
  FwRegular = "FwRegular",
  FwMedium = "FwMedium",
  FwSeBold = "FwSeBold",
  FwBold = "FwBold",
  FwExBold = "FwExBold",
  FwBlack = "FwBlack"
}

export const FontStyles: {[key in FontStyleNameEnum]: Partial<CSSStyleDeclaration>} = {
  [FontStyleNameEnum.Fs0]: {
    fontSize: `${FontValues.fontSize * 2}rem`
  },
  
  [FontStyleNameEnum.Fs1]: {
    fontSize: `${FontValues.fontSize * 1.75}rem`
  },
  
  [FontStyleNameEnum.Fs2]: {
    fontSize: `${FontValues.fontSize * 1.5}`
  },
  
  [FontStyleNameEnum.Fs3]: {
    fontSize: `${FontValues.fontSize * 1.125}`
  },
  
  [FontStyleNameEnum.Fs4]: {
    fontSize: `${FontValues.fontSize * 1}`
  },
  
  [FontStyleNameEnum.Fs5]: {
    fontSize: `${FontValues.fontSize * .81}`
  },
  
  [FontStyleNameEnum.FwThin]: {
    fontWeight: "100"
  },
  
  [FontStyleNameEnum.FwExLight]: {
    fontWeight: "200"
  },
  
  [FontStyleNameEnum.FwLight]: {
    fontWeight: "300"
  },
  
  [FontStyleNameEnum.FwRegular]: {
    fontWeight: "400"
  },
  
  [FontStyleNameEnum.FwMedium]: {
    fontWeight: "500"
  },
  
  [FontStyleNameEnum.FwSeBold]: {
    fontWeight: "600"
  },
  
  [FontStyleNameEnum.FwBold]: {
    fontWeight: "700"
  },
  
  [FontStyleNameEnum.FwExBold]: {
    fontWeight: "800"
  },
  
  [FontStyleNameEnum.FwBlack]: {
    fontWeight: "900"
  }
}