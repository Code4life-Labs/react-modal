// Modal Class Object for React.
/**
 * Went React Modal Object is created, Somethings will be reacted:
 * - A context:
 */
import React from 'react';
import {
  Modal,
  ModalItem,
  ExceptionUtils,
  MIUIEBuilder,
  MIResult,
  MIMOpenAppendOptions,
  MIMOpenRemoveOptions
} from "tunangn-modal";

import ModalContainer from '../components/TunangnModal';
import Dialog from '../components/Dialog';
import Snackbar from '../components/Snackbar';
import Side from '../components/Side';

import { RMAddItemOptions } from '../types';

export class ReactModal {
  modal!: Modal<HTMLDivElement>;

  private _isInit!: boolean;

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

      });

      this._isInit = true;
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
  open(name: string) {
    try {
      let item = this.modal.getItem(name);
      return item?.open(this._append, this._remove);
    } catch (error: any) {
      console.error(ExceptionUtils.getException("[Error - ReactModal method: _init]: " + error.message));
      let result: MIResult = {
        isAgree: false,
        message: error.message
      };
      return Promise.resolve(result);
    }
  }

  addItem(options: RMAddItemOptions) {
    try {
      switch(options.type) {
        
      }

      return true;
    } catch (error: any) {
      console.error(ExceptionUtils.getException("[Error - ReactModal method: _init]: " + error.message));
      return false;
    }
  }

  setAppendFn(callBack: (options: MIMOpenAppendOptions) => any) {
    this._append = callBack
  }

  getAppendFn() {
    return this._append;
  }

  setRemoveFn(callBack: (options: MIMOpenRemoveOptions) => any) {
    this._remove = callBack;
  }

  getRemoveFn() {
    return this._remove;
  }
}