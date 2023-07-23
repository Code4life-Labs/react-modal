import { ReactModal } from "./classes/ReactModal";
import { createModal } from "./creators/createModal";

import { DialogReceivedData } from "./types";

// Create default Modal React Element and default open function.
const [TunangnModal, open] = createModal();

/**
 * Use this function to open default dialog. You can pass data to this function.
 * @param options 
 */
function dialog(data: DialogReceivedData) {
  if(!ReactModal.isTunangnModalCreated) return Promise.resolve(false);
  return open
}

export {
  TunangnModal,
  dialog
}