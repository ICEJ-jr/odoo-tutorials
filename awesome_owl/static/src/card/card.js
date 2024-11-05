/** @odoo-module **/

import { Component, useState } from '@odoo/owl';

export class Card extends Component {
  static template = 'awesome_owl.card';

  static props = {
    "title": String,
    "slots": {
      type: Object,
      shape: {
        content: true
      }
    }
  }

  setup() {
    this.state = useState({
      isOpen: true
    });
  }
  
  toggleState() {
    console.log('isOpen: ', this.state.isOpen);
    this.state.isOpen= !this.state.isOpen;
  }
}
