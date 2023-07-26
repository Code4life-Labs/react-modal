import { SidePlaces } from "tunangn-modal";

import { MoveAnim, MoveFrom } from "../animations/move";

import { ElementUtils } from "./element";

import { SideComponentsStyle, SidePlaceOnStyles } from "../styles/side";

/**
   * Get Side configures with its `placeOn`. Configures is an object that contains some props are used to
   * configure style, animation...
   * @param position 
   * @returns 
   */
function getDefaultConfigures(placeOn: SidePlaces) {
  let animation: {
    keyFrames: any[] | undefined,
    moveFrom: MoveFrom | undefined
  } = {
    keyFrames: undefined,
    moveFrom: undefined
  };
  let placeOnStyle;

  switch(placeOn) {
    case "right": {
      animation.moveFrom = "Right";
      placeOnStyle = SidePlaceOnStyles.Right;
      break;
    };

    default: {
      animation.moveFrom = "Left";
      placeOnStyle = SidePlaceOnStyles.Left;
      break;
    }
  }
  
  return {
    animation,
    placeOnStyle
  }
};

/**
 * Use to run side animation (appear).
 * @param ref HTML Element Ref of React Element (Side).
 * @param placeOn
 */
function runDefaultAnim(ref: HTMLElement, placeOn: SidePlaces) {
  let { animation } = getDefaultConfigures(placeOn);
  MoveAnim.From(ref, animation.keyFrames, animation.moveFrom);
};

/**
 * Use to get default container of snackbar style with its `position`
 * @param position 
 */
function getDefaultContainerStyle(placeOn: SidePlaces) {
  const { placeOnStyle } = getDefaultConfigures(placeOn);
  return ElementUtils.mergeStyles(
    SideComponentsStyle.Container as Partial<CSSStyleDeclaration>,
    placeOnStyle as Partial<CSSStyleDeclaration>
  );
};

/**
 * Contains utils to get some default configures and perform some actions for
 * default `Side`.
 */
export const SideUtils = {
  getDefaultConfigures,
  runDefaultAnim,
  getDefaultContainerStyle
}