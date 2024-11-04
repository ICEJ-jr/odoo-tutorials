/** @odoo-module **/

import { Component, useState } from '@odoo/owl';
import { TodoItem } from './todo_item';


export class TodoList extends Component {
  static template = 'awesome_owl.todo_list';

  setup() {
    this.state = useState({
      todos: [
        { id: 1, description: 'Task 1', isCompleted: false },
        { id: 2, description: 'Task 2', isCompleted: false },
        { id: 3, description: 'buy milk', isCompleted: false },
      ],
    });
  }

  static components = { TodoItem };
}
