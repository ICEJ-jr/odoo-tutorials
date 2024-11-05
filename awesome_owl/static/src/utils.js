/** @odoo-module **/

import { useRef, onMounted } from '@odoo/owl';

export function useAutofocus(ref) {
  const todoInputRef = useRef(ref);
  onMounted(() => {
    // console.log(this.todoInputRef.el);
    todoInputRef.el.focus();
  });
}
