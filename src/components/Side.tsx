// Default Side React Component
import * as React from 'react';

import { SideComponentsStyle } from '../styles/side';
import { ButtonStyles } from '../styles/bases/button';
import { FontStyles } from '../styles/bases/font';
import { SpacingStyles } from '../styles/bases/spacing';

import {
  ModalItemProps,
  SideReceivedData
} from '../types'

export default function Side(props: ModalItemProps) {
  const data: SideReceivedData = props.item.getData();

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

  return (
    <div className="tunangn-side" style={SideComponentsStyle.Container}>
      {/* Header of Side */}
      <div className="tunangn-side-header" style={SideComponentsStyle.Header}>
        {
          typeof data.title === "string" && data.title
          ? <p style={FontStyles.FwBold}>{data.title}</p>
          : React.isValidElement(data.title) && data.title
            ? data.title
            : <p style={FontStyles.FwBold}>Tunangn Side</p>
        }
        <button style={styles.current.closeBtn} onClick={() => props.close({ isAgree: false })}></button>
      </div>
      {/* Body of Side */}
      <div className="tunangn-side-body" style={SideComponentsStyle.Body}>
        {
          typeof data.content === "string" && data.content
          ? <p>{data.content}</p>
          : React.isValidElement(data.content) && data.content
            ? data.content
            : <p>This is the default content of side.</p>
        }
      </div>
      {/* Footer of Side */}
      <div className="tunangn-side-footer" style={SideComponentsStyle.Footer}></div>
    </div>
  )
}