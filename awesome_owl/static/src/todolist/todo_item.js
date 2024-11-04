/** @odoo-module **/

import { Component } from '@odoo/owl';

export class TodoItem extends Component {
  static template = 'awesome_owl.todo_item';

  static props = {
    todo: {
      type: Object,
      required: true,
      shape: {
        id: Number,
        description: String,
        isCompleted: Boolean
      }
    }
  }
}
