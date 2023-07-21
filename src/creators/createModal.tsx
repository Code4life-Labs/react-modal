import React from "react";

import { ReactModal } from "../classes/ReactModal";
import TunangnModal from "../components/TunangnModal";

import { ModalContainerProps } from "../types";

/**
 * Use to create a Modal and open Modal Item function.
 * 
 * @function
 * @returns 
 */
export function createModal() {
  const __ = new ReactModal();

  return function(props: ModalContainerProps) {
    return <TunangnModal {...props} modalManager={__} />
  }
}