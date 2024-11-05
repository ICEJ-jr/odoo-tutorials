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

  toggleState(ev) {
    const elem = ev.target;
    const todo = this.state.todos[elem.dataset.id - 1];
    todo.isCompleted = !todo.isCompleted;
    // console.log('toggleState', todo);
  }

  removeTodo(ev) {
    const elem = ev.target;
    console.log('removeTodo', elem.dataset.id);
    // this.state.
    const index = this.state.todos.findIndex((todo) => todo.id == elem.dataset.id);
    console.log('todo index', index);
    if (index >= 0) {
      // remove the element at index from this.state.todos
      this.state.todos.splice(index, 1);
    }
  }
}
