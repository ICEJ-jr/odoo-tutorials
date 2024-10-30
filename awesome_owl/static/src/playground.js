/** @odoo-module **/

import { Component, markup } from '@odoo/owl';
import { Card } from "./card/card";

export class Playground extends Component {
  static template = 'awesome_owl.playground';

  static components = { Card };

  cards = [
    {
      title: 'Card 1',
      content:
        "<div class='text-primary'>This is a simple card with some content.</div>"
      ,
    },
    {
      title: 'Card 2',
      content:  markup("<div class='text-primary'>This is another simple card with content.</div>"),
    },
  ];
}
