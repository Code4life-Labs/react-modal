const defaultOptions: KeyframeAnimationOptions = {
  duration: 200,
  fill: "forwards",
  easing: "cubic-bezier(0.33, 1, 0.68, 1)"
}

export type MoveFrom = "Left" | "Right" | "Top" | "Bottom";

function setDefaultOptions(options?: KeyframeAnimationOptions) {
  if(!options) options = {...defaultOptions};
  else for(let defaultOptionName in defaultOptions) {
    let key = defaultOptionName as keyof KeyframeAnimationOptions;
    if(!options[key]) options[key] = defaultOptions[key] as undefined;
  }
  return options;
}

/**
 * **Move by transform**
 * Use to move a element. A range is equal to element's width.
 * @param element 
 * @param options 
 */
function From(
  element: HTMLElement,
  keyframes?: Array<Keyframe>,
  from: MoveFrom = "Left",
  options?: KeyframeAnimationOptions
) {
  if(!keyframes)
    switch(from) {
      case "Left": {
        keyframes = [
          { transform: "translate(-100%, 0)" },
          { transform: "translate(0, 0)" }
        ];
        break;
      };

      case "Right": {
        keyframes = [
          { transform: "translate(100%, 0)" },
          { transform: "translate(0, 0)" }
        ];
        break;
      };

      case "Top": {
        keyframes = keyframes
          ? keyframes
          : 
          (
            [
              { transform: "translate(0, -100%)" },
              { transform: "translate(0, 0)" }
            ]
          );
        break;
      };

      case "Bottom": {
        keyframes = keyframes
          ? keyframes
          : 
          (
            [
              { transform: "translate(0, 100%)" },
              { transform: "translate(0, 0)" }
            ]
          );
        break;
      };
    }

  // Set default options if options is undefined or options hasn't default properties.
  options = setDefaultOptions(options);

  // If has `animate` method, run the animation.
  if(element.animate) element.animate(keyframes, options);
};

export const MoveAnim = {
  From
}