import { SnackbarPositions } from "tunangn-modal";

import { MoveAnim, MoveFrom } from "../animations/move";

import { ElementUtils } from "./element";

import { SnackbarComponentsStyle, SnackbarPositionStyles } from "../styles/snackbar";

/**
   * Get Snackbar configures with its `position`. Configures is an object that contains some props are used to
   * configure style, animation...
   * @param position 
   * @returns 
   */
function getDefaultConfigures(position: SnackbarPositions) {
  let animation: {
    keyFrames: any[] | undefined,
    moveFrom: MoveFrom | undefined
  } = {
    keyFrames: undefined,
    moveFrom: undefined
  };
  let positionStyle;

  switch(position) {
    case "top": {
      animation.keyFrames = [
        { transform: "translate(-50%, -100%)" },
        { transform: "translate(-50%, 0)" }
      ];
      positionStyle = SnackbarPositionStyles.Top;
      break;
    };

    case "top-left": {
      positionStyle = SnackbarPositionStyles.TopLeft;
      break;
    };

    case "bottom": {
      animation.keyFrames = [
        { transform: "translate(-50%, 100%)" },
        { transform: "translate(-50%, 0)" }
      ];
      positionStyle = SnackbarPositionStyles.Bottom;
      break;
    };

    case "bottom-left": {
      positionStyle = SnackbarPositionStyles.BottomLeft;
      break;
    };

    case "bottom-right": {
      animation.moveFrom = "Right";
      positionStyle = SnackbarPositionStyles.BottomRight;
      break;
    };

    default: {
      animation.moveFrom = "Right";
      positionStyle = SnackbarPositionStyles.TopRight;
      break;
    }
  }

  return {
    animation,
    positionStyle
  }
};

/**
 * Use to run snackbar animation (appear).
 * @param ref HTML Element Ref of React Element (Snackbar).
 * @param position Position of Snackbar.
 */
function runAnim(ref: HTMLDivElement, position: SnackbarPositions) {
  let { animation } = getDefaultConfigures(position);
  MoveAnim.From(ref, animation.keyFrames, animation.moveFrom);
};

/**
 * Use to get default container of snackbar style with its `position`
 * @param position 
 */
function getDefaultContainerStyle(position: SnackbarPositions) {
  const { positionStyle } = getDefaultConfigures(position);
  return ElementUtils.mergeStyles(
    SnackbarComponentsStyle.Container as Partial<CSSStyleDeclaration>,
    positionStyle as Partial<CSSStyleDeclaration>
  );
}

/**
 * Contains utils to get some default configures and perform some actions for
 * default `Snackbar`.
 */
export const SnackbarUtils = {
  getDefaultConfigures,
  runAnim,
  getDefaultContainerStyle
}