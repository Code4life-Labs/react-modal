import { MITypes, MIResult, PublicModalItemProps } from "tunangn-modal";
import { ReactModal } from "../classes/ReactModal";

export interface ModalItemProps {
  close: (result: MIResult) => void,
  item: PublicModalItemProps
}

export interface RMAddItemOptions {
  /**
   * Name of modal item.
   */
  name: string,
  /**
   * Type of modal item.
   */
  type: MITypes,
  /**
   * Function component of modal item.
   * @returns 
   */
  element?: (props: ModalItemProps) => JSX.Element
}

export enum MIUIStyleNameEnum {
  Container = "Container",
  Header = "Header",
  Body = "Body",
  Footer = "Footer"
}

export interface WrappedModalContainerProps {
  /**
   * Class name of modal's container.
   */
  className?: string,
  /**
   * List of Modal Item use to assign.
   */
  items: {[key: string]: {
    /**
     * Type of modal item.
     */
    type: MITypes,
    /**
     * Function component of modal item.
     * @returns 
     */
    element?: (props: ModalItemProps) => JSX.Element
  }},
}

export interface ModalContainerProps extends WrappedModalContainerProps {
  /**
   * Instance of React Modal.
   */
  modalManager: ReactModal
}

export interface SideReceivedData {
  title?: string | JSX.Element,
  content?: string | JSX.Element
}

export interface DialogReceivedData {
  title?: string | JSX.Element,
  content?: string | JSX.Element,
  cancelBtnLabel?: string | JSX.Element | null,
  agreeBtnLabel?: string | JSX.Element | null
}