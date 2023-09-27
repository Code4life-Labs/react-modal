import * as React from "react";

import {
  MIMOpenAppendOptions,
  MIMOpenRemoveOptions,
  MIResult,
  MITypes,
  SidePlaces,
  SnackbarPositions
} from "tunangn-modal";

import { ModalStyles } from "../styles/modal";

import { ModalContainerProps } from "../types";

export const DEFAULT_DIALOG_NAME = "_DIALOG_";
export const DEFAULT_SIDE_NAME = "_LEFT_SIDE_";
export const DEFAULT_SNACKBAR_NAME = "_SNACKBAR_";

/**
 * This is default items of modal.
 */
const _DEFAULT_ITEMS_: {[key: string]: { type: MITypes, placeOn?: SidePlaces, position?: SnackbarPositions }} = {
  [DEFAULT_DIALOG_NAME]: {
    type: "dialog"
  },
  [DEFAULT_SIDE_NAME]: {
    type: "side",
    placeOn: "left"
  },
  [DEFAULT_SNACKBAR_NAME]: {
    type: "snack-bar",
    position: "top"
  }
};

/**
 * __IMPORTANT__
 * 
 * Default ModalContainer Component.
 * @param props 
 * @returns 
 */
export default function TunangnModal(props: ModalContainerProps) {
  if(!props.modalManager) throw Error("Modal manager is required!");

  /**
   * Items of Modal.
   */
  const [items, setItems] = React.useState<
    {[key: string]: {
      element: JSX.Element,
      attributes: {
        type: MITypes,
        duration?: number,
        placeOn?: SidePlaces,
        position?: SnackbarPositions
      },
      close: (ressult: MIResult) => void
    }}
  >({});
  const modalContainerRef = React.useRef<HTMLDivElement>(null);
  /**
   * Assign some properties
   */
  const modalData = React.useRef({
    className: props.className ? props.className : "tunangn-modal",
    /**
     * Style of Modal container
     */
    style: ModalStyles.Default,
    /**
     * Previous length of items in modal container.
     */
    N: 0
  });
  /**
   * Key of MIUIElement
   */
  const miuiElementKeys = Object.keys(items);

  /**
   * RUN ONE TIME
   * Set up after Modal Container Element is rendered.
   */
  React.useEffect(() => {
    let items = props.items;
    // Merge Default item with 
    items = {..._DEFAULT_ITEMS_, ...(items ? items : {})};

    let itemNames = Object.keys(items);

    // Set up _append function for modal.
    props.modalManager.setAppendFn((options: MIMOpenAppendOptions) => {
      setItems(prevState => {
        let attributes: any = {
          type: options._ItemAttributes.type
        };

        // Add specific attributes
        if(options._ItemAttributes.duration) attributes.duration = options._ItemAttributes.duration;
        if(options._ItemAttributes.placeOn) attributes.placeOn = options._ItemAttributes.placeOn;
        if(options._ItemAttributes.position) attributes.position = options._ItemAttributes.position;

        prevState[options.tempUID] = {
          element: options.MIUIElement,
          attributes: attributes,
          close: options._ItemActions.close
        };
        return {...prevState};
      });
    });

    // Set up _remove function for modal.
    props.modalManager.setRemoveFn((options: MIMOpenRemoveOptions) => {
      setItems(prevState => {
        delete prevState[options.tempUID];
        let itemUIDs = Object.keys(prevState);

        // If there aren't items left, reset style of modal container element.
        // Or style of document.body
        if(itemUIDs.length === 0) {
          props.modalManager.modal.container!.style.backgroundColor = "";
          props.modalManager.modal.container!.style.pointerEvents = "";
          props.modalManager.modal.container!.style.display = "none";

          // Reset style.overflow of body
          document.body.style.overflow = "";
        }

        /**
         * If there aren't any items left but snackbar, remove background.
         */
        if(itemUIDs.every(name => name.startsWith("snack-bar"))) {
          // Reset style.overflow of body
          document.body.style.overflow = "";
          props.modalManager.modal.container!.style.backgroundColor = "";
        }
        return {...prevState};
      });
    });

    // Add and Create Modal Item
    for(let itemName of itemNames) {
      let itemOptions = items[itemName];
      props.modalManager.addItem({
        name: itemName,
        type: itemOptions.type,
        placeOn: itemOptions.placeOn,
        position: itemOptions.position,
        duration: itemOptions.duration,
        clearDefaultInlineStyle: itemOptions.clearDefaultInlineStyle,
        className: itemOptions.className,
        element: itemOptions.element
      });
    }

    // Setup properties for modal.
    props.modalManager.isWhiteBackground = props.canUseWhiteBG;

    props.modalManager.modal.container = modalContainerRef.current!;
  }, []);

  /**
   * RUN AFTER AN ITEM IS ADDED
   * So the `miuiElementKeys` will be updated from new items list.
   * Don't worry about `miuiElementKeys`'s value is the same as the previous one (in previous render).
   */
  React.useEffect(() => {
    let currentItemsLength = miuiElementKeys.length;

    // If N < currentItemsLength, perform some actions.
    // That means a new item actually added.
    if(modalData.current.N < currentItemsLength) {
      let lastIndex = miuiElementKeys.length - 1;
      let lastItem = items[miuiElementKeys[lastIndex]];

      // If item has `duration`, add setTimeout to close.
      if(lastItem.attributes.duration) {
        setTimeout(() => {
          // Close item after a period time
          lastItem.close({ isAgree: false });
        }, lastItem.attributes.duration);
      };
    }

    modalData.current.N = currentItemsLength;
  }, [items]);

  return React.useMemo(() => (
    <div
      ref={modalContainerRef}
      className={props.className ? props.className : modalData.current.className}
      style={props.className ? {} : modalData.current.style}
    >
      {
        miuiElementKeys.map(key => {
          return <div key={key}>{items[key].element}</div>
        })
      }
    </div>
  ), [items]);
}