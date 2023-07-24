import { ReactModal } from "./classes/ReactModal";
import { createModal } from "./creators/createModal";

import {
  DEFAULT_DIALOG_NAME,
  DEFAULT_SIDE_NAME,
  DEFAULT_SNACKBAR_NAME
} from "./components/TunangnModal";

import {
  DefaultDialogReceivedData,
  DefaultSideReceivedData,
  DefaultSnackbarReceivedData
} from "./types";

// Create default Modal React Element and default open function.
const [TunangnModal, openTunangnMI] = createModal();

/**
 * Use this function to open default __`dialog`__. You can pass data to this function.
 * @param options 
 */
function dialog(data: DefaultDialogReceivedData) {
  if(!ReactModal.isTunangnModalCreated) return Promise.resolve(false);
  return openTunangnMI(DEFAULT_DIALOG_NAME, data);
}

/**
 * Use this function to open default __`side`__. You can pass data to this function.
 * @param options 
 */
function side(data: DefaultSideReceivedData) {
  if(!ReactModal.isTunangnModalCreated) return Promise.resolve(false);
  return openTunangnMI(DEFAULT_SIDE_NAME, data);
}

/**
 * Use this function to open default __`snackbar`__. You can pass data to this function.
 * @param options 
 */
function snackbar(data: DefaultSnackbarReceivedData) {
  if(!ReactModal.isTunangnModalCreated) return Promise.resolve(false);
  return openTunangnMI(DEFAULT_SNACKBAR_NAME, data);
}

export {
  TunangnModal,
  openTunangnMI,
  dialog,
  side,
  snackbar
}