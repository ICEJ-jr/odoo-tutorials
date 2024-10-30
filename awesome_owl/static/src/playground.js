/** @odoo-module **/

import { Component, markup, useState } from '@odoo/owl';
import { Counter } from './counter/counter';

export class Playground extends Component {
  static template = 'awesome_owl.playground';

  static components = { Counter };

  setup() {
    this.state = useState({ valueA: 0, valueB: 0});
  }

}
