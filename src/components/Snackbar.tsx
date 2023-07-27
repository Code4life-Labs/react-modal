// Default Snackbar React Component
import * as React from 'react';

import { SnackbarUtils } from '../utils/snackbar';
import { ElementUtils } from '../utils/element';

import { SnackbarComponentsStyle } from '../styles/snackbar';
import { ButtonStyles } from '../styles/bases/button';
import { FontStyles } from '../styles/bases/font';
import { ColorValues } from '../styles/bases/variables';

import { MoveAnim, MoveFrom } from '../animations/move';


import {
  DefaultSnackbarReceivedData,
  CreateModalItemWrappedComponentProps
} from '../types';

export default function Snackbar(props: CreateModalItemWrappedComponentProps) {
  const data: DefaultSnackbarReceivedData = props.item.getData();
  const snackbarRef = React.useRef<HTMLDivElement>(null);
  const className = props.className ? props.className : "tunangn-snackbar";

  const { positionStyle, animation } = SnackbarUtils.getDefaultConfigures(props.item.position!);

  let headerBackgroundColor = (data.color && (
    data.color === "info" || data.color === "success" || data.color === "warning" || data.color === "error"
  )) ? { backgroundColor: ColorValues[data.color] } : data.color ? { backgroundColor: data.color } : undefined;

  const styles = {
    closeBtn: {
      ...ButtonStyles.Btn,
      ...ButtonStyles.BtnClose
    },
    container: ElementUtils.mergeStyles(
      SnackbarComponentsStyle.Container as Partial<CSSStyleDeclaration>,
      positionStyle as Partial<CSSStyleDeclaration>
    ),
    header: headerBackgroundColor ?
    ElementUtils.mergeStyles(
      SnackbarComponentsStyle.Header as Partial<CSSStyleDeclaration>,
      headerBackgroundColor
    )
    : SnackbarComponentsStyle.Header
  };

  /**
   * RUN ONE TIME
   * Run animation after element is rendered with its ref.
   */
  React.useEffect(() => {
    MoveAnim.From(snackbarRef.current!, animation.keyFrames, animation.moveFrom);
  }, []);

  if(props.clearDefaultInlineStyle && props.className) {
    return (
      <div
        ref={snackbarRef}
        className={className}
      >
        {/* Header of Snackbar */}
        <div className={className + "-header"}>
          {
            typeof data.title === "string" && data.title
            ? <p>{data.title}</p>
            : React.isValidElement(data.title) && data.title
              ? data.title
              : <p>Tunangn Side</p>
          }
        </div>
        {/* Body of Snackbar */}
        <div className={className + "-body"}>
          {
            typeof data.content === "string" && data.content
            ? <p>{data.content}</p>
            : React.isValidElement(data.content) && data.content
              ? data.content
              : <p>This is the default content of side.</p>
          }
        </div>
        {/* Footer of Snackbar */}
        <div className={className + "-footer"}>
          <button style={styles.closeBtn} onClick={() => props.close({ isAgree: false })}></button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={snackbarRef}
      className={className}
      style={styles.container}
    >
      {/* Header of Snackbar */}
      <div className={className + "-header"} style={styles.header}>
        {
          typeof data.title === "string" && data.title
          ? <p style={FontStyles.FwBold}>{data.title}</p>
          : React.isValidElement(data.title) && data.title
            ? data.title
            : <p style={FontStyles.FwBold}>Tunangn Side</p>
        }
      </div>
      {/* Body of Snackbar */}
      <div className={className + "-body"} style={SnackbarComponentsStyle.Body}>
        {
          typeof data.content === "string" && data.content
          ? <p>{data.content}</p>
          : React.isValidElement(data.content) && data.content
            ? data.content
            : <p>This is the default content of side.</p>
        }
      </div>
      {/* Footer of Snackbar */}
      <div className={className + "-footer"} style={SnackbarComponentsStyle.Footer}>
        <button style={styles.closeBtn} onClick={() => props.close({ isAgree: false })}></button>
      </div>
    </div>
  )
}