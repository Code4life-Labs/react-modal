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
  utils: {
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
   * How long does snackbar last? If you want to disable the auto-close behaviour, you
   * can assign `null` to this option.
   */
  duration?: number | null,
  /**
   * Clear default inline stlyes. You can use the default class name to style the UI component
   * for Modal Item.
   * 
   * __Note__:
   * - This option will not work if you use `element` as Function Component.
   * - Don't recommend.
   * - Using this option if you want to write css to the default class name.
   */
  clearDefaultInlineStyle?: boolean,
  /**
   * Class name of item's container. This will be based class name for other ui element components.
   * You don't need `clearDefaultInlineStyle` to clear the default inline style, because the default inline
   * style will be cleared if `className` option is assigned.
   * 
   * For example:
   * `className = "myDialog"` => `header's class name is myDialog-header`
   * 
   * __Note__:
   * - This option will not work if you use `element` as Function Component.
   * - Using this option if you just want to modify UI Element with your own css.
   */
  className?: string,
  /**
   * Use this option to customize Element. Its can be:
   * - __Function component__: will override the default UI element. You can use some util functions
   * to perform the default behaviour of element or ui's style of element (by `configurations` in `props`).
   * Or you can build your own.
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
   * 
   * I don't recommend you to change the class name of Modal Container.
   */
  className?: string,
  /**
   * List of your Modal Item options. These options will be use around the default
   * Modal Item, except `element` option. `element` will be replace the default Modal Item Element, but
   * you can use its configurations (getContainerStyle and runAnimation)
   * 
   * If you use `element`, you just need `name`, `type` (required) and `duration` (only for snackbar).
   * 
   * __Note__: If you want to apply change, you need to reload the browser.
   */
  items?: {[key: string]: CreateItemOptions}
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