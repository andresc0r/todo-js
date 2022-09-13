//import { saludar } from './js/componentes';
import './styles.css';
// import { Todo } from './classes/todo.class'
// import { List } from './classes/todo-list.class';
import {Todo, List} from './classes'
import { crearTodoHtml } from './js/componentes';

export const TodoList = new List();

TodoList.todos.forEach( todo => crearTodoHtml(todo));

console.log('todos', TodoList.todos)

