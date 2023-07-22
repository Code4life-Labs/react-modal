import * as React from "react";

import {
  MIMOpenAppendOptions,
  MIMOpenRemoveOptions
} from "tunangn-modal";

import { ModalStyles } from "../styles/modal";

import { ModalContainerProps } from "../types";

/**
 * Default ModalContainer Component.
 * @param props 
 * @returns 
 */
export default function TunangnModal(props: ModalContainerProps) {
  if(!props.modalManager) throw Error("Modal manager is required!");

  console.log("Create modal...");

  const [items, setItems] = React.useState<{[key: string]: JSX.Element}>({});
  const modalContainerRef = React.useRef<HTMLDivElement>(null);
  /**
   * Assign some properties
   */
  const modalData = React.useRef({
    className: props.className ? props.className : "tunangn-modal",
    /**
     * Style of Modal container
     */
    style: {...ModalStyles.Default, ...ModalStyles.TranparentBlackBG}
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
    let itemNames = Object.keys(props.items);
    let ridPrefix = props.className ? props.className : "tunangn-modal";
    ridPrefix += "-item";

    // Set up _append function for modal.
    props.modalManager.setAppendFn((options: MIMOpenAppendOptions) => {
      setItems(prevState => {
        prevState[options.tempUID] = options.MIUIElement;
        return {...prevState};
      });
    });

    // Set up _remove function for modal.
    props.modalManager.setRemoveFn((options: MIMOpenRemoveOptions) => {
      setItems(prevState => {
        delete prevState[options.tempUID];
        let itemNames = Object.keys(prevState);
        if(itemNames.length == 0) {
          props.modalManager.modal.container!.style.backgroundColor = "";
          props.modalManager.modal.container!.style.pointerEvents = "";
          props.modalManager.modal.container!.style.display = "none";
        }
        return {...prevState};
      });
    });

    console.log("Items: ", props.items);
    console.log("Item names: ", itemNames);

    // Add and Create Modal Item
    for(let itemName of itemNames) {
      console.log("Add item: ", itemName);
      props.modalManager.addItem({
        name: itemName,
        type: props.items[itemName].type,
        element: props.items[itemName].element
      });
    }
    console.log("Modal: ", props.modalManager.modal);
    props.modalManager.modal.container = modalContainerRef.current!;

    console.log("Create modal done.");
  }, []);

  console.log("Items: ", items);

  return React.useMemo(() => (
    <div
      ref={modalContainerRef}
      className={modalData.current.className}
      style={modalData.current.style}
    >
      {
        miuiElementKeys.map(key => {
          return <div key={key}>{items[key]}</div>
        })
      }
    </div>
  ), [items]);
}