import * as React from "react";

import { ReactModal } from "../classes/ReactModal";
import TunangnModal from "../components/TunangnModal";

import {
  WrappedModalContainerProps
} from "../types";

/**
 * Use to create a Modal and open Modal Item function.
 * 
 * @function
 * @returns 
 */
export function createModal() {
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


  const open = _reactModalInstance.open;
  return [Component, open] as const;
}