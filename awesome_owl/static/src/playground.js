/** @odoo-module **/

import { Component } from '@odoo/owl';
import { Card } from "./card/card";

export class Playground extends Component {
  static template = 'awesome_owl.playground';

  static components = { Card };
}
