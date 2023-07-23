import * as React from "react";

import { MIResult } from "tunangn-modal";

import { ReactModal } from "../classes/ReactModal";
import TunangnModal from "../components/TunangnModal";

import {
  WrappedModalContainerProps
} from "../types";

/**
 * Use to create a Modal and open Modal Item function. It will return an Array has 2 element.
 * - `Component`: You can name it whatever you want. Put it in your root component, in `App.(jsx|tsx)`.
 * - `open`: a function help you to open a modal item by modal item name. And you can pass data to this
 * modal item. This function will receive the result from Modal Item through Promise.
 * 
 * @function
 * @returns 
 */
export function createModal(): [
  (props: WrappedModalContainerProps) => React.JSX.Element,
  (name: string, data?: any) => Promise<MIResult>
] {
  /**
   * New Instance of React Modal.
   */
  const _reactModalInstance = new ReactModal();
  /**
   * Place this component in `App.jsx`. It's injected with instance of React Modal.
   * 
   * @param props 
   * @returns 
   */
  const Component = function(props: WrappedModalContainerProps) {
    return <TunangnModal {...props} modalManager={_reactModalInstance} />
  };

  return [Component, _reactModalInstance.open];
}