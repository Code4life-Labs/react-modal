import {
  MITypes,
  MIResult,
  PublicModalItemProps,
  SidePlaces,
  SnackbarPositions
} from "tunangn-modal";
import { ReactModal } from "../classes/ReactModal";

export interface ModalItemElementOptions {
  header?: (props: ModalItemProps) => JSX.Element,
  body?: (props: ModalItemProps) => JSX.Element,
  footer?: (props: ModalItemProps) => JSX.Element
}

export interface ModalItemProps {
  /**
   * Use to close the modal item with Result.
   * @param result The result of modal item.
   * @returns 
   */
  close: (result: MIResult) => void,
  /**
   * Item properties & methods.
   */
  item: PublicModalItemProps
}

export interface CustomizedModalItemProps extends ModalItemProps {
  /**
   * __Recommended__
   * 
   * If you build your own Modal Item, you should use this properties.
   */
  configurations: {
    /**
     * Use to get container style. You can pass your custom style to this function, your style
     * will override the default one.
     * @param style 
     * @returns 
     */
    getContainerStyle: (style?: React.CSSProperties) => React.CSSProperties,
    /**
     * __Note__: `dialog` isn't support animation now.
     * 
     * Use to run default animation.
     * @param ref Ref of HTML Element.
     * @returns 
     */
    runAnimation?: (ref: HTMLElement) => void
  }
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
   * Clear default inline stlye.
   * 
   * __Note__: This prop will not work if you use `element` as React Component.
   */
  clearDefaultInlineStyle?: boolean,
  /**
   * Class name of item's container. This will be based class name for other ui element components.
   * 
   * For example:
   * `className = "myDialog"` => `header's class name is myDialog-header`
   * 
   * __Note__:
   * - This prop will not work if you use `element` as React Component.
   * - Using this prop if you just want to modify UI Element.
   */
  className?: string,
  /**
   * __Only for Snackbar__
   * 
   * Can snackbar close itself after a period time? `duration` will not work if this property is set.
   */
  canAutoClose?: boolean,
  /**
   * Use this prop to customize Element. Its can be:
   * - __Function component__: will override the default UI element. You can use some util function
   * to perform the default behaviour of element. Or you can build your own.
   * - __undefined__: will use the default UI element.
   */
  element?: ((props: CustomizedModalItemProps) => JSX.Element)
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

export interface CreateModalItemWrappedComponentProps extends ModalItemProps {
  clearDefaultInlineStyle?: boolean,
  className?: string
}