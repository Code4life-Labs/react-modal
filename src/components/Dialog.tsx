// Default Dialog React Component
import * as React from 'react';

import { DialogComponentsStyle } from '../styles/dialog';
import { ButtonStyles } from '../styles/bases/button';
import { FontStyles } from '../styles/bases/font';
import { SpacingStyles } from '../styles/bases/spacing';

import {
  ModalItemProps,
  DefaultDialogReceivedData
} from '../types';

/**
 * Default Dialog React component is used to show Dialog.
 * @param props 
 * @returns 
 */
export default function Dialog(props: ModalItemProps) {
  const data: DefaultDialogReceivedData = props.item.getData();

  const styles = React.useRef({
    closeBtn: {
      ...ButtonStyles.Btn,
      ...ButtonStyles.BtnClose
    },
    agreeBtn: {
      ...ButtonStyles.Btn,
      ...ButtonStyles.BtnBlue,
      ...ButtonStyles.BtnBorder
    },
    cancelBtn: {
      ...ButtonStyles.Btn,
      ...ButtonStyles.BtnTransparent20,
      ...SpacingStyles.Me1,
      ...ButtonStyles.BtnBorder
    }
  });

  console.log("Dialog's data: ", data);

  return (
    <div className="tunangn-dialog" style={DialogComponentsStyle.Container}>
      {/* Header of Dialog */}
      <div className="tunangn-dialog-header" style={DialogComponentsStyle.Header}>
        {
          typeof data.title === "string" && data.title
          ? <p style={FontStyles.FwBold}>{data.title}</p>
          : React.isValidElement(data.title) && data.title
            ? data.title
            : <p style={FontStyles.FwBold}>Tunangn Dialog</p>
        }
        <button style={styles.current.closeBtn} onClick={() => props.close({ isAgree: false })}></button>
      </div>
      {/* Body of Dialog */}
      <div className="tunangn-dialog-body" style={DialogComponentsStyle.Body}>
        {
          typeof data.content === "string" && data.content
          ? <p>{data.content}</p>
          : React.isValidElement(data.content) && data.content
            ? data.content
            : <p>This is the default content of dialog.</p>
        }
      </div>
      {/* Footer of Dialog */}
      <div className="tunangn-dialog-footer" style={DialogComponentsStyle.Footer}>
        {
          data.cancelBtnLabel !== null 
          &&
          <button style={styles.current.cancelBtn} onClick={() => props.close({ isAgree: false })}>
            {
              (typeof data.cancelBtnLabel === "string" || React.isValidElement(data.cancelBtnLabel)) && data.cancelBtnLabel
              ? data.cancelBtnLabel
              : "Cancel"
            }
          </button>
        }
        {
          data.agreeBtnLabel !== null
          &&
          <button style={styles.current.agreeBtn} onClick={() => props.close({ isAgree: true })}>
            {
              (typeof data.agreeBtnLabel === "string" || React.isValidElement(data.agreeBtnLabel)) && data.agreeBtnLabel
              ? data.agreeBtnLabel
              : "Ok"
            }
          </button>
        }
      </div>
    </div>
  )
}