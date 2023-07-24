import {
  MITypes,
  MIResult,
  PublicModalItemProps,
  SidePlaces,
  SnackbarPositions
} from "tunangn-modal";
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
   * Only for Side.
   * Where does side place?
   */
  placeOn?: SidePlaces,
  /**
   * Only for Snackbar.
   * Position of snackbar
   */
  position?: SnackbarPositions,
  /**
   * Only for Snackbar.
   * How long does snackbar last?
   */
  duration?: number,
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
  items?: {[key: string]: {
    /**
     * Type of modal item.
     */
    type: MITypes,
    /**
     * Only for Side.
     * Where does side place?
     */
    placeOn?: SidePlaces,
    /**
     * Only for Snackbar.
     * Position of snackbar
     */
    position?: SnackbarPositions,
    /**
     * Only for Snackbar.
     * How long does snackbar last?
     */
    duration?: number,
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

interface DefaultMIReceivedData {
  title?: string | JSX.Element,
  content?: string | JSX.Element,
}

export interface DefaultDialogReceivedData extends DefaultMIReceivedData {
  cancelBtnLabel?: string | JSX.Element | null,
  agreeBtnLabel?: string | JSX.Element | null
}

export interface DefaultSideReceivedData extends DefaultMIReceivedData {}

export interface DefaultSnackbarReceivedData extends DefaultMIReceivedData {
  /**
   * Color for Snackbar
   */
  color?: "info" | "success" | "warning" | "error" | string
}