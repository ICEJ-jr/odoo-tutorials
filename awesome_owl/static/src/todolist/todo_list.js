/** @odoo-module **/

import { Component, useState, useRef, onMounted } from '@odoo/owl';
import { TodoItem } from './todo_item';
import { useAutofocus } from '../utils';

export class TodoList extends Component {
  static template = 'awesome_owl.todo_list';

  setup() {
    this.state = useState({
      todos: [],
    });
    this.todoInputRef = useAutofocus('todo_input');
  }

  static components = { TodoItem };

  addTodo(ev) {
     const input = document.getElementById('todo-input');
     const task = input.value.trim();

     if (task && ev.keyCode === 13) {
      this.state.todos.push({
        id: this.state.todos.length + 1,
        description: task,
        isCompleted: false,
      });
      input.value = ''; // Clear input field
     }
  }
}
