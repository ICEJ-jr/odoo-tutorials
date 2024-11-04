/** @odoo-module **/

import { Component, markup, useState } from '@odoo/owl';
import { TodoList } from './todolist/todo_list';

export class Playground extends Component {
  static template = 'awesome_owl.playground';

  static components = { TodoList };
}
