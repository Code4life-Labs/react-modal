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

interface CreateItemOptions {
  /**
   * Type of modal item.
   */
  type: MITypes,
  /**
   * __Only for Side__
   * 
   * Where is side placed?
   */
  placeOn?: SidePlaces,
  /**
   * __Only for Snackbar__
   * 
   * What is position of snackbar?
   */
  position?: SnackbarPositions,
  /**
   * __Only for Snackbar__
   * 
   * How long does snackbar last?
   */
  duration?: number,
  /**
   * __Only for Snackbar__
   * 
   * Can snackbar close itself after a period time? `duration` will not work if this property is set.
   */
  canAutoClose?: boolean,
  /**
   * Function component of modal item.
   * @returns 
   */
  element?: (props: ModalItemProps) => JSX.Element
}

export interface RMAddItemOptions extends CreateItemOptions {
  /**
   * Name of modal item.
   */
  name: string
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
  items?: {[key: string]: CreateItemOptions},
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