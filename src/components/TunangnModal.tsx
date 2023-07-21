import React from "react";

import {
  MIMOpenAppendOptions,
  MIMOpenRemoveOptions
} from "tunangn-modal";

import { ModalContainerProps } from "../types";

/**
 * Default ModalContainer Component.
 * @param props 
 * @returns 
 */
export default function TunangnModal(props: ModalContainerProps) {
  if(!props.modalManager) throw Error("Modal manager is required!");

  const [items, setItems] = React.useState<{[key: string]: JSX.Element}>({});
  const modalContainerRef = React.useRef<HTMLDivElement>(null);
  /**
   * Assign some properties
   */
  const modalData = React.useRef({
    className: props.className ? props.className : "tunangn-modal"
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
    let itemNames = Object.assign(props.items);
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
        return {...prevState};
      });
    });

    // Add and Create Modal Item
    for(let itemName of itemNames) {
      props.modalManager.addItem({
        name: itemName,
        type: props.items[itemName].type,
        element: props.items[itemName].element
      });
    }

    props.modalManager.modal.container = modalContainerRef.current!;
  }, []);

  return React.useMemo(() => (
    <div ref={modalContainerRef} className={modalData.current.className}>
      {
        miuiElementKeys.map(key => {
          return <div key={key}>{items[key]}</div>
        })
      }
    </div>
  ), [items]);
}