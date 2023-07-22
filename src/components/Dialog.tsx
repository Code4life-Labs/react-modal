// Default Dialog React Component
import * as React from 'react'

import { DialogComponentsStyle } from '../styles/dialog';
import { ButtonStyles } from '../styles/bases/button';

import { ModalItemProps } from '../types';

/**
 * Default Dialog React component is used to show Dialog.
 * @param props 
 * @returns 
 */
export default function Dialog({
  close,
  item
}: ModalItemProps) {
  console.log("Item: ", item);

  const styles = React.useRef({
    closeBtn: {
      ...ButtonStyles.Btn,
      ...ButtonStyles.BtnClose
    }
  });

  return (
    <div className="tunangn-dialog" style={DialogComponentsStyle.Container}>
      <div className="tunangn-dialog-header" style={DialogComponentsStyle.Header}>
        <button style={styles.current.closeBtn} onClick={() => close({ isAgree: false })}></button>
      </div>
      <div className="tunangn-dialog-body" style={DialogComponentsStyle.Body}>

      </div>
      <div className="tunangn-dialog-footer" style={DialogComponentsStyle.Footer}>

      </div>
    </div>
  )
}