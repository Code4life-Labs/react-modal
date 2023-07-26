import {
  MIResult,
  PublicModalItemProps
} from "tunangn-modal";

/**
 * **ElementUtils**
 * 
 * Use to add inline style to an element with defined style.
 * @function
 * @param element An HTML Element.
 * @param style Style object.
 */
function addStyle(element: HTMLElement, style: {[styleName in keyof Partial<CSSStyleDeclaration>]: any}) {
  for(let styleName in style) {
    element.style[styleName] = style[styleName];
  }
}

/**
 * **ElementUtils**
 * 
 * Use to merge styles.
 * @function
 * @param styles Inline style object of MI.
 * @returns 
 */
function mergeStyles(...styles: Array<Partial<CSSStyleDeclaration>>) {
  let merged = {};

  for(let style of styles) {
    if(!style) continue;
    if(typeof style === "object" && Array.isArray(style)) {
      merged = {...merged, ...mergeStyles(...style)};
    } else {
      merged = {...merged, ...style};
    }
  }
  
  return merged;
}

/**
 * **ElementUtils**
 * 
 * Use to get HTMLElement from `string` or `function`.
 * @param element
 * @param args Arguments for element if it is a `function`.
 * @returns 
 */
function getHTMLElementFromOptions<UIElementType, Data>(
  element: string | ((close: (result: MIResult) => void, item: PublicModalItemProps) => UIElementType),
  args?: {
    close: (result: MIResult) => void,
    item: PublicModalItemProps,
    data?: Data,
  }
) {
  switch(typeof element) {
    case "function": {
      return element(args?.close!, args?.item!);
    };

    case "string": {
      let div = document.createElement("div");
      div.innerHTML = element;
      return div.children[0] as UIElementType;
    }
  }
}

export const ElementUtils = {
  addStyle,
  mergeStyles,
  getHTMLElementFromOptions
};