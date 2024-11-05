/** @odoo-module **/

import { Component, markup } from '@odoo/owl';

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
}
