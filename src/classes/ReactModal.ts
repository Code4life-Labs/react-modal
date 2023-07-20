// Modal Class Object for React.
/**
 * Went React Modal Object is created, there are something is reacted with:
 * - A context:
 */

import React from 'react';
import { Modal } from "tunangn-modal";

import ModalContainer from '../components/ModalContainer';
import Dialog from '../components/Dialog';
import Snackbar from '../components/Snackbar';
import Side from '../components/Side';

export class ReactModal {
  modal!: Modal<() => JSX.Element>

  constructor() {
    this.modal = new Modal();
    this.modal.container = ModalContainer;

    // Bind all methods
    this.open = this.open.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  open() {

  }

  addItem() {

  }
}