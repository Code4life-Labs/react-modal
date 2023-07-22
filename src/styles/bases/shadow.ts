enum BoxShadowStyleNameEnum {
  BShadow1 = "BShadow1",
  BShadow2 = "BShadow2",
  BShadow3 = "BShadow3",
  BShadow4 = "BShadow4"
}

export const BoxShadowStyles: {[key in BoxShadowStyleNameEnum]: React.CSSProperties} = {
  [BoxShadowStyleNameEnum.BShadow1]: {
    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`
  },

  [BoxShadowStyleNameEnum.BShadow2]: {
    boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px`
  },

  [BoxShadowStyleNameEnum.BShadow3]: {
    boxShadow: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px`
  },

  [BoxShadowStyleNameEnum.BShadow4]: {
    boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`
  }
}