/** @odoo-module **/

import { Component, useState } from '@odoo/owl';

export class Counter extends Component {
  static template = 'awesome_owl.counter';

  static props = ['value', 'increment?'];
}
