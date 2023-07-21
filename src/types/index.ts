import { ModalItem, MITypes } from "tunangn-modal";
import { ReactModal } from "../classes/ReactModal";

export interface RMAddItemOptions {
  /**
   * Name of modal item.
   */
  name: string,
  /**
   * Type of modal item.
   */
  type: string
}

export interface ModalContainerProps {
  /**
   * Class name of modal's container.
   */
  className: string,
  items: {[key: string]: {
    type: MITypes,
    item: ModalItem<JSX.Element>
  }},
  modalManager: ReactModal
}