import { SpacingValues } from './variables'

enum SpacingStyleNameEnum {
  M0 = "M0",
  M1 = "M1",
  M2 = "M2",
  M3 = "M3",
  M4 = "M4",
  Mx0 = "Mx0",
  Mx1 = "Mx1",
  Mx2 = "Mx2",
  Mx3 = "Mx3",
  Mx4 = "Mx4",
  My0 = "My0",
  My1 = "My1",
  My2 = "My2",
  My3 = "My3",
  My4 = "My4",
  Ms0 = "Ms0",
  Ms1 = "Ms1",
  Ms2 = "Ms2",
  Ms3 = "Ms3",
  Ms4 = "Ms4",
  Me0 = "Me0",
  Me1 = "Me1",
  Me2 = "Me2",
  Me3 = "Me3",
  Me4 = "Me4",
  Mt0 = "Mt0",
  Mt1 = "Mt1",
  Mt2 = "Mt2",
  Mt3 = "Mt3",
  Mt4 = "Mt4",
  Mb0 = "Mb0",
  Mb1 = "Mb1",
  Mb2 = "Mb2",
  Mb3 = "Mb3",
  Mb4 = "Mb4",
  P0 = "P0",
  P1 = "P1",
  P2 = "P2",
  P3 = "P3",
  P4 = "P4",
  Px0 = "Px0",
  Px1 = "Px1",
  Px2 = "Px2",
  Px3 = "Px3",
  Px4 = "Px4",
  Py0 = "Py0",
  Py1 = "Py1",
  Py2 = "Py2",
  Py3 = "Py3",
  Py4 = "Py4",
  Ps0 = "Ps0",
  Ps1 = "Ps1",
  Ps2 = "Ps2",
  Ps3 = "Ps3",
  Ps4 = "Ps4",
  Pe0 = "Pe0",
  Pe1 = "Pe1",
  Pe2 = "Pe2",
  Pe3 = "Pe3",
  Pe4 = "Pe4",
  Pt0 = "Pt0",
  Pt1 = "Pt1",
  Pt2 = "Pt2",
  Pt3 = "Pt3",
  Pt4 = "Pt4",
  Pb0 = "Pb0",
  Pb1 = "Pb1",
  Pb2 = "Pb2",
  Pb3 = "Pb3",
  Pb4 = "Pb4"
}

export const SpacingStyles: {[key in SpacingStyleNameEnum]: React.CSSProperties} = {
  [SpacingStyleNameEnum.M0]: {
    margin: "0"
  },
  
  [SpacingStyleNameEnum.M1]: {
    margin: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.M2]: {
    margin: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.M3]: {
    margin: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.M4]: {
    margin: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* Margin x */
  
  [SpacingStyleNameEnum.Mx0]: {
    marginLeft: "0",
    marginRight: "0"
  },
  
  [SpacingStyleNameEnum.Mx1]: {
    marginLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`,
    marginRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Mx2]: {
    marginLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`,
    marginRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Mx3]: {
    marginLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`,
    marginRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Mx4]: {
    marginLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`,
    marginRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* Margin y */
  
  [SpacingStyleNameEnum.My0]: {
    marginTop: "0",
    marginBottom: "0"
  },
  
  [SpacingStyleNameEnum.My1]: {
    marginTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`,
    marginBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.My2]: {
    marginTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`,
    marginBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.My3]: {
    marginTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`,
    marginBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.My4]: {
    marginTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`,
    marginBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* Margin left */
  
  [SpacingStyleNameEnum.Ms0]: {
    marginLeft: "0"
  },
  
  [SpacingStyleNameEnum.Ms1]: {
    marginLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Ms2]: {
    marginLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Ms3]: {
    marginLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Ms4]: {
    marginLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* Margin right */
  
  [SpacingStyleNameEnum.Me0]: {
    marginRight: "0"
  },
  
  [SpacingStyleNameEnum.Me1]: {
    marginRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Me2]: {
    marginRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Me3]: {
    marginRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Me4]: {
    marginRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* Margin top */
  
  [SpacingStyleNameEnum.Mt0]: {
    marginTop: "0"
  },
  
  [SpacingStyleNameEnum.Mt1]: {
    marginTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Mt2]: {
    marginTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Mt3]: {
    marginTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Mt4]: {
    marginTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* Margin bottom */
  
  [SpacingStyleNameEnum.Mb0]: {
    marginBottom: "0"
  },
  
  [SpacingStyleNameEnum.Mb1]: {
    marginBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Mb2]: {
    marginBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Mb3]: {
    marginBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Mb4]: {
    marginBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* padding */
  
  [SpacingStyleNameEnum.P0]: {
    padding: "0"
  },
  
  [SpacingStyleNameEnum.P1]: {
    padding: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.P2]: {
    padding: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.P3]: {
    padding: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.P4]: {
    padding: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* padding x */
  
  [SpacingStyleNameEnum.Px0]: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  
  [SpacingStyleNameEnum.Px1]: {
    paddingLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`,
    paddingRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Px2]: {
    paddingLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`,
    paddingRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Px3]: {
    paddingLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`,
    paddingRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Px4]: {
    paddingLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`,
    paddingRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* padding y */
  
  [SpacingStyleNameEnum.Py0]: {
    paddingTop: "0",
    paddingBottom: "0"
  },
  
  [SpacingStyleNameEnum.Py1]: {
    paddingTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`,
    paddingBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Py2]: {
    paddingTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`,
    paddingBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Py3]: {
    paddingTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`,
    paddingBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Py4]: {
    paddingTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`,
    paddingBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* padding left */
  
  [SpacingStyleNameEnum.Ps0]: {
    paddingLeft: "0"
  },
  
  [SpacingStyleNameEnum.Ps1]: {
    paddingLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Ps2]: {
    paddingLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Ps3]: {
    paddingLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Ps4]: {
    paddingLeft: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* padding right */
  
  [SpacingStyleNameEnum.Pe0]: {
    paddingRight: "0"
  },
  
  [SpacingStyleNameEnum.Pe1]: {
    paddingRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Pe2]: {
    paddingRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Pe3]: {
    paddingRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Pe4]: {
    paddingRight: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* padding top */
  
  [SpacingStyleNameEnum.Pt0]: {
    paddingTop: "0"
  },
  
  [SpacingStyleNameEnum.Pt1]: {
    paddingTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Pt2]: {
    paddingTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Pt3]: {
    paddingTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Pt4]: {
    paddingTop: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  },
  
  /* padding bottom */
  
  [SpacingStyleNameEnum.Pb0]: {
    paddingBottom: "0"
  },
  
  [SpacingStyleNameEnum.Pb1]: {
    paddingBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 1}rem`
  },
  
  [SpacingStyleNameEnum.Pb2]: {
    paddingBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 2}rem`
  },
  
  [SpacingStyleNameEnum.Pb3]: {
    paddingBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 3}rem`
  },
  
  [SpacingStyleNameEnum.Pb4]: {
    paddingBottom: `${(SpacingValues.spacingValue + SpacingValues.spacingValueStep) * 4}rem`
  }
}