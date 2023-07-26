// Modal Class Object for React.
/**
 * Went React Modal Object is created, Somethings will be reacted:
 * - A context:
 */
import * as React from 'react';

import {
  Modal,
  Dialog,
  Side,
  Snackbar,
  ExceptionUtils,
  MIUIEBuilder,
  MIResult,
  MIMOpenAppendOptions,
  MIMOpenRemoveOptions
} from "tunangn-modal";

import { createModalItem } from '../creators/createModalItem';

import DefaultDialog from '../components/Dialog';
import DefaultSide from '../components/Side';
import DefaultSnackbar from '../components/Snackbar';

import { ElementUtils } from '../utils/element';
import { SideUtils } from '../utils/side';
import { SnackbarUtils } from '../utils/snackbar';

import { ModalStyles } from '../styles/modal';
import { DialogComponentsStyle } from '../styles/dialog';
import { SideComponentsStyle } from '../styles/side';
import { SnackbarComponentsStyle } from '../styles/snackbar';

import {
  RMAddItemOptions,
  ModalItemProps,
  CustomizedModalItemProps,
  CreateModalItemWrappedComponentProps
} from '../types';

export class ReactModal {
  modal!: Modal<HTMLDivElement>;

  private _isInit!: boolean;
  static isTunangnModalCreated: boolean = false;

  /**
   * Append and Remove function
   */
  private _append!: (options: MIMOpenAppendOptions) => any
  private _remove!: (optoins: MIMOpenRemoveOptions) => any

  constructor() {
    this.modal = new Modal<HTMLDivElement>();

    // Bind all methods
    this.open = this.open.bind(this);
    this.addItem = this.addItem.bind(this);

    this._init();
  }

  private _init() {
    try {
      // IMPORTANT
      MIUIEBuilder.setCompound((MIElement) => {
        return MIElement;
      });

      this._isInit = true;
      if(!ReactModal.isTunangnModalCreated) ReactModal.isTunangnModalCreated = true;
      return true;
    } catch (error: any) {
      console.error(ExceptionUtils.getException("[Error - ReactModal method: _init]: " + error.message));
      return false;
    }
  }

  /**
   * Use to open a Modal Item.
   * 
   * @method
   * @param name Name of item want to open
   * @returns 
   */
  open(name: string, data?: any) {
    try {
      let that = this;
      return new Promise<MIResult>((resolve) => {
        setTimeout(() => {
          let item = that.modal.getItem(name)!;
          // Set data for item.
          item.setData(data);

          // Show modal container first
          that.modal.container!.style.display = "block";

          switch(item.type) {
            case "dialog": {
              ElementUtils.addStyle(that.modal.container!, ModalStyles.TranparentBlackBG as Partial<CSSStyleDeclaration>);
              break;
            };

            case "side": {
              ElementUtils.addStyle(that.modal.container!, ModalStyles.TranparentBlackBG as Partial<CSSStyleDeclaration>);
              break;
            };

            case "snack-bar": {
              that.modal.container!.style.pointerEvents = "none";
              break;
            }
          }

          item.open(that._append, that._remove)
          .then(result => resolve(result));
        }, 0);
      });
    } catch (error: any) {
      console.error(ExceptionUtils.getException("[Error - ReactModal method: _init]: " + error.message));
      let result: MIResult = {
        isAgree: false,
        message: error.message
      };
      return Promise.resolve(result);
    }
  }

  /**
   * Use to add new modal item to modal manager. `options.name` and `options.type` are required.
   * Name of Modal Item is the key that is assigned in `items` props of Modal Component, and type is
   * assigned here.
   * 
   * @method
   * @param options 
   * @returns 
   */
  addItem(options: RMAddItemOptions) {
    try {
      let item;

      switch(options.type) {
        case "dialog": {
          item = new Dialog<JSX.Element>({
            name: options.name,
            build: function(builder) {
              builder.buildCompoment("container", (close, item) => {
                let Element;

                if(options.element) {
                  let configurations = {
                    getContainerStyle: function(style?: React.CSSProperties) {
                      return ElementUtils.mergeStyles(
                        DialogComponentsStyle.Container as Partial<CSSStyleDeclaration>,
                        style as Partial<CSSStyleDeclaration>
                      )
                    }
                  };
                  Element = options.element as ((props: CustomizedModalItemProps) => JSX.Element);
                  return <Element close={close} item={item} configurations={configurations} />
                };

                Element = createModalItem(DefaultDialog, {
                  className: options.className,
                  clearDefaultInlineStyle: options.clearDefaultInlineStyle
                } as CreateModalItemWrappedComponentProps);

                return <Element close={close} item={item} />
              })
              return true;
            }
          });
          break;
        };

        case "side": {
          item = new Side<JSX.Element>({
            name: options.name,
            placeOn: options.placeOn,
            build: function(builder) {
              builder.buildCompoment("container", (close, item) => {
                let Element;

                if(options.element) {
                  let { placeOnStyle } = SideUtils.getDefaultConfigures(item.placeOn!);
                  let configurations = {
                    getContainerStyle: function(style?: React.CSSProperties) {
                      return ElementUtils.mergeStyles(
                        SideComponentsStyle.Container as Partial<CSSStyleDeclaration>,
                        placeOnStyle as Partial<CSSStyleDeclaration>,
                        style as Partial<CSSStyleDeclaration>
                      )
                    },
                    runAnimation: function(ref: HTMLElement) {
                      SideUtils.runDefaultAnim(ref, item.placeOn!);
                    }
                  };
                  Element = options.element as ((props: CustomizedModalItemProps) => JSX.Element);
                  return <Element close={close} item={item} configurations={configurations} />
                };

                Element = createModalItem(DefaultSide, {
                  className: options.className,
                  clearDefaultInlineStyle: options.clearDefaultInlineStyle
                } as CreateModalItemWrappedComponentProps);

                return <Element close={close} item={item} />
              })
              return true;
            }
          });
          break;
        };

        case "snack-bar": {
          item = new Snackbar<JSX.Element>({
            name: options.name,
            position: options.position,
            duration: options.duration,
            build: function(builder) {
              builder.buildCompoment("container", (close, item) => {
                let Element;

                if(options.element) {
                  let { positionStyle } = SnackbarUtils.getDefaultConfigures(item.position!);
                  let configurations = {
                    getContainerStyle: function(style?: React.CSSProperties) {
                      return ElementUtils.mergeStyles(
                        SideComponentsStyle.Container as Partial<CSSStyleDeclaration>,
                        positionStyle as Partial<CSSStyleDeclaration>,
                        style as Partial<CSSStyleDeclaration>
                      )
                    },
                    runAnimation: function(ref: HTMLElement) {
                      SnackbarUtils.runDefaultAnim(ref, item.position!);
                    }
                  };
                  Element = options.element as ((props: CustomizedModalItemProps) => JSX.Element);
                  return <Element close={close} item={item} configurations={configurations} />
                };

                Element = createModalItem(DefaultSnackbar, {
                  className: options.className,
                  clearDefaultInlineStyle: options.clearDefaultInlineStyle
                } as CreateModalItemWrappedComponentProps);

                return <Element close={close} item={item} />
              })
              return true;
            }
          });
          break;
        }
      }
      this.modal.registerItem(options.name, item!);
      return true;
    } catch (error: any) {
      console.error(ExceptionUtils.getException("[Error - ReactModal method: _init]: " + error.message));
      return false;
    }
  }

  /**
   * Use to set append function.
   * 
   * @method
   * @param callBack 
   */
  setAppendFn(callBack: (options: MIMOpenAppendOptions) => any) {
    this._append = callBack
  }

  /**
   * Use to set remove function.
   * 
   * @method
   * @param callBack 
   */
  setRemoveFn(callBack: (options: MIMOpenRemoveOptions) => any) {
    this._remove = callBack;
  }
}