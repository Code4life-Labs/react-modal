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
      duration?: number,
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
    style: {...ModalStyles.Default, ...ModalStyles.TranparentBlackBG},
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
        console.log("Open: ", options.tempUID);
        console.log("Its info: ", options);
        prevState[options.tempUID] = { 
          element: options.MIUIElement,
          duration: options._ItemAttributes.duration,
          close: options._ItemActions.close
        };
        return {...prevState};
      });
    });

    // Set up _remove function for modal.
    props.modalManager.setRemoveFn((options: MIMOpenRemoveOptions) => {
      setItems(prevState => {
        delete prevState[options.tempUID];
        let itemNames = Object.keys(prevState);

        // If there aren't items left, reset style of modal container element.
        if(itemNames.length == 0) {
          props.modalManager.modal.container!.style.backgroundColor = "";
          props.modalManager.modal.container!.style.pointerEvents = "";
          props.modalManager.modal.container!.style.display = "none";
        }
        return {...prevState};
      });
    });

    // Add and Create Modal Item
    for(let itemName of itemNames) {
      // console.log("Assigned Item: ", items[itemName]);
      let itemOptions = items[itemName];
      props.modalManager.addItem({
        name: itemName,
        type: itemOptions.type,
        placeOn: itemOptions.placeOn,
        position: itemOptions.position,
        duration: itemOptions.duration,
        element: itemOptions.element
      });
    }

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
      // If item has `duration`, add setTimeout to close.
      let lastIndex = miuiElementKeys.length - 1;
      let lastItem = items[miuiElementKeys[lastIndex]];
      if(lastItem.duration) {
        setTimeout(() => {
          // Close item after a period time
          lastItem.close({ isAgree: false });
        },lastItem.duration);
      };
      console.log("New Item Added!!!");
    }

    modalData.current.N = currentItemsLength;
  }, [items]);

  return React.useMemo(() => (
    <div
      ref={modalContainerRef}
      className={modalData.current.className}
      style={modalData.current.style}
    >
      {
        miuiElementKeys.map(key => {
          return <div key={key}>{items[key].element}</div>
        })
      }
    </div>
  ), [items]);
}