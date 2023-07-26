import * as React from "react";

import {
  ModalItemProps,
  CreateModalItemWrappedComponentProps,
  ModalItemElementOptions
} from "../types";

/**
 * Use to create Modal Item with custom element.
 * @param WrappedComponent 
 * @param element 
 * @returns 
 */
export function createModalItem(
  WrappedComponent: (props: CreateModalItemWrappedComponentProps) => JSX.Element,
  options: CreateModalItemWrappedComponentProps
) {
  return function(props: ModalItemProps) {
    return (
      <WrappedComponent
        {...props}
        className={options.className}
        clearDefaultInlineStyle={options.clearDefaultInlineStyle}
      />
  );
  }
}