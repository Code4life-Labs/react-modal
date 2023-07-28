// Default Side React Component
import * as React from 'react';

import { MoveAnim, MoveFrom } from '../animations/move';

import { SideUtils } from '../utils/side';
import { ElementUtils } from '../utils/element';

import { SideComponentsStyle } from '../styles/side';
import { ButtonStyles } from '../styles/bases/button';
import { FontStyles } from '../styles/bases/font';
import { SpacingStyles } from '../styles/bases/spacing';

import {
  DefaultSideReceivedData,
  CreateModalItemWrappedComponentProps
} from '../types'

export default function Side(props: CreateModalItemWrappedComponentProps) {
  const data: DefaultSideReceivedData = props.item.getData();
  const sideRef = React.useRef<HTMLDivElement>(null);
  const className = props.className ? props.className : "tunangn-side";

  // Get place-on style to configure Side.
  const { placeOnStyle, animation } = SideUtils.getDefaultConfigures(props.item.placeOn!);

  const styles = {
    closeBtn: {
      ...ButtonStyles.Btn,
      ...ButtonStyles.BtnClose
    },
    container: ElementUtils.mergeStyles(
      SideComponentsStyle.Container as Partial<CSSStyleDeclaration>,
      placeOnStyle as Partial<CSSStyleDeclaration>
    )
  };

  /**
   * RUN ONE TIME
   * Run animation after element is rendered with its ref.
   */
  React.useEffect(() => {
    MoveAnim.From(sideRef.current!, animation.keyFrames, animation.moveFrom);
  }, []);

  if(props.clearDefaultInlineStyle || props.className) {
    return (
      <div
        className={className}
        ref={sideRef}
      >
        {/* Header of Side */}
        <div className={className + "-header"}>
          {
            typeof data.title === "string" && data.title
            ? <p>{data.title}</p>
            : React.isValidElement(data.title) && data.title
              ? data.title
              : <p>Tunangn Side</p>
          }
          <button style={styles.closeBtn} onClick={() => props.close({ isAgree: false })}></button>
        </div>
        {/* Body of Side */}
        <div className={className + "-body"}>
          {
            typeof data.content === "string" && data.content
            ? <p>{data.content}</p>
            : React.isValidElement(data.content) && data.content
              ? data.content
              : <p>This is the default content of side.</p>
          }
        </div>
      </div>
    )
  }

  return (
    <div
      className={className}
      style={styles.container}
      ref={sideRef}
    >
      {/* Header of Side */}
      <div className={className + "-header"} style={SideComponentsStyle.Header}>
        {
          typeof data.title === "string" && data.title
          ? <p style={FontStyles.FwBold}>{data.title}</p>
          : React.isValidElement(data.title) && data.title
            ? data.title
            : <p style={FontStyles.FwBold}>Tunangn Side</p>
        }
        <button style={styles.closeBtn} onClick={() => props.close({ isAgree: false })}></button>
      </div>
      {/* Body of Side */}
      <div className={className + "-body"} style={SideComponentsStyle.Body}>
        {
          typeof data.content === "string" && data.content
          ? <p>{data.content}</p>
          : React.isValidElement(data.content) && data.content
            ? data.content
            : <p>This is the default content of side.</p>
        }
      </div>
    </div>
  )
}